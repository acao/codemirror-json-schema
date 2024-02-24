export { jsonCompletion } from "./features/completion";

export {
  jsonSchemaLinter,
  type JSONValidationOptions,
  handleRefresh,
} from "./features/validation";

export {
  jsonSchemaHover,
  type HoverOptions,
  type FoundCursorData,
  type CursorData,
} from "./features/hover";

export { jsonSchema } from "./json/bundled";

export type {
  JSONPointersMap,
  JSONPointerData,
  JSONPartialPointerData,
} from "./types";

export * from "./utils/parse-json-document";
export * from "./utils/json-pointers";

export * from "./features/state";
