// using ajv and json-source-map, provide a function that returns the ranges and messages
// for json schema validation errors in json strings
// it should provide line numbers and columns for the errors
// it should provide the error messages

import { EditorView } from "@codemirror/view";
import { Text } from "@codemirror/state";
import { Diagnostic } from "@codemirror/lint";
import { JSONSchema7 } from "json-schema";
import addFormats from "ajv-formats"

import JsonMap from "json-source-map";

import Ajv, { ValidateFunction } from "ajv";


const schemas: Record<string, unknown> = {}

const ajv = new Ajv({
  // allErrors: true,
  // verbose: true,
  strict: false,
  // this is only executed on compileAsync, but loops endlessly 
  // until the browser main process crashes
  loadSchema: async function (uri) {
    if(schemas[uri]) return schemas[uri]
    const data = await fetch(uri).then((res) => res.json());
    schemas[uri] = data;
    return data
  },

});


addFormats(ajv)

/**
 * from https://github.com/codemirror/lang-json/blob/main/src/lint.ts
 */
// function getErrorPosition(error: SyntaxError, doc: Text): Position {
//   let m;
//   if ((m = error.message.match(/at position (\d+)/))) {
//     const pos = Math.min(+m[1], doc.length);
//     return { column: pos, pos, line: 0 };
//   }
//   if ((m = error.message.match(/at line (\d+) column (\d+)/))) {
//     const pos = Math.min(doc.line(+m[1]).from + +m[2] - 1, doc.length);
//     return { column: +m[2] - 1, pos, line: doc.line(+m[1]).number };
//   }
//   if ((m = error.message.match(/Unexpected end of JSON input (\d+)/))) {
//     const pos = doc.length;
//     return { column: pos, pos, line: 0 };
//   }
//   return { pos: 0, column: 0, line: 0 };
// }
function getErrorPosition(error: SyntaxError, doc: Text): number {
  let m;
  if ((m = error.message.match(/at position (\d+)/))) {
    return Math.min(+m[1], doc.length);
  }
  if ((m = error.message.match(/at line (\d+) column (\d+)/))) {
    return Math.min(doc.line(+m[1]).from + +m[2] - 1, doc.length);
  }
  return 0;
}

const errorMessage = (error: any) => {
  let addendum;
  switch (error.keyword) {
    case "additionalProperties":
      addendum = error.params.additionalProperty;
      break;
    case "enum":
      addendum = error.params.allowedValues.join(", ");
      break;
  }
  return [error.instancePath, error.message, addendum]
    .filter((_) => _)
    .join(" ");
};

export function getRangeForJSONErrors(
  view: EditorView,
  validate?: ValidateFunction
): Diagnostic[] {
  if(!validate) return []
  // const validate = ajv.compile(schema);
  // let parsed: ParsedJSON;

  // const valid = validate(JSON.parse(view.state.doc.toString()));
  // if (valid) {
  //   return [];
  // }

  // first see if the json can parse
  let json: any;
  const text = view.state.doc.toString();

  // ignore blank texts
  if (!text) return [];

  try {
    json = JsonMap.parse(text);
  } catch (error) {
    if (error instanceof SyntaxError) {
      // parse the error message and report the line numbers
      const pos = getErrorPosition(error as SyntaxError, view.state.doc);

      return [
        {
          from: pos,
          to: pos,
          severity: "error",
          message: error.message
        },
      ];
    }
  }
  let valid = false
  try {
   valid = validate(json.data);
  }
  catch {}

  if (valid || !validate.errors) return [];
  return validate.errors.reduce((acc: Diagnostic[], error) => {
    let pointer = json.pointers[error.instancePath];

    if (pointer) {
      // console.log('pointer', pointer, error);
      acc.push({
        from: pointer.value.pos,
        to: pointer.valueEnd.pos,
        message: errorMessage(error),
        severity: "error",
      } as Diagnostic);
    }

    return acc;
  }, []);
  // const document = syntaxTree(view.state);

  // const errorPathNames = validate.errors?.map((error) => {
  //   if(error.instancePath) return error.instancePath.slice(1).replace(/\//g, '.')
  //   if(error.keyword === 'additionalProperties') {
  //     return error.params.additionalProperty
  //   }
  //   if(error.keyword === 'required') {
  //     return error.params.missingProperty
  //   }
  // })

  // const locations = {}

  // document.iterate({
  //   from: 0,
  //   to: view.state.doc.length,
  //   enter: (type, from, to) => {
  //     console.log(type.type.name)
  //     let key = ''
  //     if(type.type.name === 'Object') {
  //     }
  //     if(type.type.name === 'PropertyName') {
  //       const original = view.state.doc.sliceString(
  //         type.from,
  //         type.to
  //       );
  //       console.log(original)
  //       let parent = false;

  //       return true
  //     }
  //     return true
  //   },
  // })

  // return validate.errors?.map((error) => {

  //  return error
  // })
}

export class JSONValidation {
  private validate?: ValidateFunction;
  public constructor(private schema: JSONSchema7) {
    this.schema = schema;
    // if(this.schema['$schema']) {
    //   this.schema['$schema'] = this.schema['$schema'].replace('http://', 'https://')
    // }
    try {
      // TODO: we need compileAsync to load the remote schemas
      // but then it loads them in an endless loop
      //  (async () => {
      //   console.log('compiling')
      //   this.validate = await ajv.compileAsync(this.schema)
        
      // })();
      this.validate = ajv.compile(this.schema)
    }
    catch(err) {
      console.error(err)
    }

  }
  public doValidation(view: EditorView) {
    return getRangeForJSONErrors(view, this.validate);
  }
}