export const TOKENS = {
  STRING: "String",
  NUMBER: "Number",
  TRUE: "True",
  FALSE: "False",
  NULL: "Null",
  OBJECT: "Object",
  ARRAY: "Array",
  PROPERTY: "Property",
  PROPERTY_NAME: "PropertyName",
  PROPERTY_COLON: "PropertyColon", // used in json5 grammar
  JSON_TEXT: "JsonText",
  INVALID: "⚠",
};
export const PRIMITIVE_TYPES = [
  TOKENS.STRING,
  TOKENS.NUMBER,
  TOKENS.TRUE,
  TOKENS.FALSE,
  TOKENS.NULL,
];
export const COMPLEX_TYPES = [TOKENS.OBJECT, TOKENS.ARRAY];
