import { JSONSchema7 } from "json-schema";
import { json, jsonLanguage, jsonParseLinter } from "@codemirror/lang-json";
import { hoverTooltip } from "@codemirror/view";
import { jsonCompletion } from "./json-completion.js";
import { handleRefresh, jsonSchemaLinter } from "./json-validation.js";
import { jsonSchemaHover } from "./json-hover.js";
import { stateExtensions } from "./state.js";

import { linter } from "@codemirror/lint";

/**
 * Full featured cm6 extension for json, including `@codemirror/lang-json`
 * @group Bundled Codemirror Extensions
 */
export function jsonSchema(schema?: JSONSchema7) {
  return [
    json(),
    linter(jsonParseLinter()),
    linter(jsonSchemaLinter(), {
      needsRefresh: handleRefresh,
    }),
    jsonLanguage.data.of({
      autocomplete: jsonCompletion(),
    }),
    hoverTooltip(jsonSchemaHover()),
    stateExtensions(schema),
  ];
}
