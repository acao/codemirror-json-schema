[codemirror-json-schema](../README.md) / JSONCompletion

# Class: JSONCompletion

## Table of contents

### Constructors

- [constructor](JSONCompletion.md#constructor)

### Methods

- [addBooleanValueCompletion](JSONCompletion.md#addbooleanvaluecompletion)
- [addDefaultValueCompletions](JSONCompletion.md#adddefaultvaluecompletions)
- [addEnumValueCompletions](JSONCompletion.md#addenumvaluecompletions)
- [addNullValueCompletion](JSONCompletion.md#addnullvaluecompletion)
- [addSchemaValueCompletions](JSONCompletion.md#addschemavaluecompletions)
- [applySnippetCompletion](JSONCompletion.md#applysnippetcompletion)
- [collectTypes](JSONCompletion.md#collecttypes)
- [doComplete](JSONCompletion.md#docomplete)
- [expandSchemaProperty](JSONCompletion.md#expandschemaproperty)
- [extendedRegExp](JSONCompletion.md#extendedregexp)
- [getAppliedValue](JSONCompletion.md#getappliedvalue)
- [getInsertTextForGuessedValue](JSONCompletion.md#getinserttextforguessedvalue)
- [getInsertTextForPlainText](JSONCompletion.md#getinserttextforplaintext)
- [getInsertTextForProperty](JSONCompletion.md#getinserttextforproperty)
- [getInsertTextForPropertyName](JSONCompletion.md#getinserttextforpropertyname)
- [getInsertTextForString](JSONCompletion.md#getinserttextforstring)
- [getInsertTextForValue](JSONCompletion.md#getinserttextforvalue)
- [getPropertyCompletions](JSONCompletion.md#getpropertycompletions)
- [getReferenceSchema](JSONCompletion.md#getreferenceschema)
- [getSchemas](JSONCompletion.md#getschemas)
- [getValueCompletions](JSONCompletion.md#getvaluecompletions)
- [getValueFromLabel](JSONCompletion.md#getvaluefromlabel)

### Properties

- [mode](JSONCompletion.md#mode)
- [opts](JSONCompletion.md#opts)
- [parser](JSONCompletion.md#parser)
- [schema](JSONCompletion.md#schema)

## Constructors

### constructor

• **new JSONCompletion**(`opts`)

#### Parameters

| Name   | Type                                                              |
| :----- | :---------------------------------------------------------------- |
| `opts` | [`JSONCompletionOptions`](../interfaces/JSONCompletionOptions.md) |

#### Defined in

[features/completion.ts:62](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L62)

## Methods

### addBooleanValueCompletion

▸ `Private` **addBooleanValueCompletion**(`value`, `collector`): `void`

#### Parameters

| Name        | Type                  |
| :---------- | :-------------------- |
| `value`     | `boolean`             |
| `collector` | `CompletionCollector` |

#### Returns

`void`

#### Defined in

[features/completion.ts:780](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L780)

---

### addDefaultValueCompletions

▸ `Private` **addDefaultValueCompletions**(`schema`, `collector`, `arrayDepth?`): `void`

#### Parameters

| Name         | Type                  | Default value |
| :----------- | :-------------------- | :------------ |
| `schema`     | `JSONSchema7`         | `undefined`   |
| `collector`  | `CompletionCollector` | `undefined`   |
| `arrayDepth` | `number`              | `0`           |

#### Returns

`void`

#### Defined in

[features/completion.ts:709](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L709)

---

### addEnumValueCompletions

▸ `Private` **addEnumValueCompletions**(`schema`, `collector`): `void`

#### Parameters

| Name        | Type                  |
| :---------- | :-------------------- |
| `schema`    | `JSONSchema7`         |
| `collector` | `CompletionCollector` |

#### Returns

`void`

#### Defined in

[features/completion.ts:755](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L755)

---

### addNullValueCompletion

▸ `Private` **addNullValueCompletion**(`collector`): `void`

#### Parameters

| Name        | Type                  |
| :---------- | :-------------------- |
| `collector` | `CompletionCollector` |

#### Returns

`void`

#### Defined in

[features/completion.ts:790](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L790)

---

### addSchemaValueCompletions

▸ `Private` **addSchemaValueCompletions**(`schema`, `types`, `collector`): `void`

#### Parameters

| Name        | Type                    |
| :---------- | :---------------------- |
| `schema`    | `JSONSchema7Definition` |
| `types`     | `Object`                |
| `collector` | `CompletionCollector`   |

#### Returns

`void`

#### Defined in

[features/completion.ts:683](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L683)

---

### applySnippetCompletion

▸ `Private` **applySnippetCompletion**(`completion`): `Completion`

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `completion` | `Completion` |

#### Returns

`Completion`

#### Defined in

[features/completion.ts:250](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L250)

---

### collectTypes

▸ `Private` **collectTypes**(`schema`, `types`): `void`

#### Parameters

| Name     | Type          |
| :------- | :------------ |
| `schema` | `JSONSchema7` |
| `types`  | `Object`      |

#### Returns

`void`

#### Defined in

[features/completion.ts:797](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L797)

---

### doComplete

▸ **doComplete**(`ctx`): `CompletionResult` \| `never`[]

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `ctx` | `CompletionContext` |

#### Returns

`CompletionResult` \| `never`[]

#### Defined in

[features/completion.ts:66](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L66)

---

### expandSchemaProperty

▸ `Private` **expandSchemaProperty**\<`T`\>(`property`, `schema`): `T`

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `T`  | extends `JSONSchema7Definition` |

#### Parameters

| Name       | Type          |
| :--------- | :------------ |
| `property` | `T`           |
| `schema`   | `JSONSchema7` |

#### Returns

`T`

#### Defined in

[features/completion.ts:883](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L883)

---

### extendedRegExp

▸ `Private` **extendedRegExp**(`pattern`): `undefined` \| `RegExp`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `pattern` | `string` |

#### Returns

`undefined` \| `RegExp`

#### Defined in

[features/completion.ts:946](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L946)

---

### getAppliedValue

▸ `Private` **getAppliedValue**(`value`): `Object`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`Object`

| Name    | Type     |
| :------ | :------- |
| `apply` | `string` |
| `label` | `string` |

#### Defined in

[features/completion.ts:921](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L921)

---

### getInsertTextForGuessedValue

▸ `Private` **getInsertTextForGuessedValue**(`value`, `separatorAfter?`): `string`

#### Parameters

| Name             | Type     | Default value |
| :--------------- | :------- | :------------ |
| `value`          | `any`    | `undefined`   |
| `separatorAfter` | `string` | `""`          |

#### Returns

`string`

#### Defined in

[features/completion.ts:502](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L502)

---

### getInsertTextForPlainText

▸ `Private` **getInsertTextForPlainText**(`text`): `string`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[features/completion.ts:524](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L524)

---

### getInsertTextForProperty

▸ `Private` **getInsertTextForProperty**(`key`, `addValue`, `rawWord`, `propertySchema?`): `string`

#### Parameters

| Name              | Type                    |
| :---------------- | :---------------------- |
| `key`             | `string`                |
| `addValue`        | `boolean`               |
| `rawWord`         | `string`                |
| `propertySchema?` | `JSONSchema7Definition` |

#### Returns

`string`

#### Defined in

[features/completion.ts:357](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L357)

---

### getInsertTextForPropertyName

▸ `Private` **getInsertTextForPropertyName**(`key`, `rawWord`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `key`     | `string` |
| `rawWord` | `string` |

#### Returns

`string`

#### Defined in

[features/completion.ts:474](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L474)

---

### getInsertTextForString

▸ `Private` **getInsertTextForString**(`value`, `prf?`): `string`

#### Parameters

| Name    | Type     | Default value |
| :------ | :------- | :------------ |
| `value` | `string` | `undefined`   |
| `prf`   | `string` | `"#"`         |

#### Returns

`string`

#### Defined in

[features/completion.ts:490](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L490)

---

### getInsertTextForValue

▸ `Private` **getInsertTextForValue**(`value`, `separatorAfter`): `string`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `value`          | `any`    |
| `separatorAfter` | `string` |

#### Returns

`string`

#### Defined in

[features/completion.ts:528](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L528)

---

### getPropertyCompletions

▸ `Private` **getPropertyCompletions**(`schema`, `ctx`, `node`, `collector`, `addValue`, `rawWord`): `void`

#### Parameters

| Name        | Type                  |
| :---------- | :-------------------- |
| `schema`    | `JSONSchema7`         |
| `ctx`       | `CompletionContext`   |
| `node`      | `SyntaxNode`          |
| `collector` | `CompletionCollector` |
| `addValue`  | `boolean`             |
| `rawWord`   | `string`              |

#### Returns

`void`

#### Defined in

[features/completion.ts:259](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L259)

---

### getReferenceSchema

▸ `Private` **getReferenceSchema**(`schema`, `ref`): `Record`\<`string`, `any`\>

#### Parameters

| Name     | Type          |
| :------- | :------------ |
| `schema` | `JSONSchema7` |
| `ref`    | `string`      |

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[features/completion.ts:902](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L902)

---

### getSchemas

▸ `Private` **getSchemas**(`schema`, `ctx`): `JSONSchema7Definition`[]

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `schema` | `JSONSchema7`       |
| `ctx`    | `CompletionContext` |

#### Returns

`JSONSchema7Definition`[]

#### Defined in

[features/completion.ts:812](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L812)

---

### getValueCompletions

▸ `Private` **getValueCompletions**(`schema`, `ctx`, `types`, `collector`): `undefined` \| \{ `valuePrefix`: `string` }

#### Parameters

| Name        | Type                  |
| :---------- | :-------------------- |
| `schema`    | `JSONSchema7`         |
| `ctx`       | `CompletionContext`   |
| `types`     | `Object`              |
| `collector` | `CompletionCollector` |

#### Returns

`undefined` \| \{ `valuePrefix`: `string` }

#### Defined in

[features/completion.ts:538](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L538)

---

### getValueFromLabel

▸ `Private` **getValueFromLabel**(`value`): `string`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[features/completion.ts:942](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L942)

## Properties

### mode

• `Private` **mode**: `JSONMode` = `MODES.JSON`

#### Defined in

[features/completion.ts:59](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L59)

---

### opts

• `Private` **opts**: [`JSONCompletionOptions`](../interfaces/JSONCompletionOptions.md)

#### Defined in

[features/completion.ts:62](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L62)

---

### parser

• `Private` **parser**: `DocumentParser`

#### Defined in

[features/completion.ts:60](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L60)

---

### schema

• `Private` **schema**: `null` \| `JSONSchema7` = `null`

#### Defined in

[features/completion.ts:58](https://github.com/jsonnext/codemirror-json-schema/blob/4fd7cc6/src/features/completion.ts#L58)
