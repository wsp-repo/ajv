// eslint-disable-next-line @typescript-eslint/naming-convention
import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

// Просто более понятный алиас с AJV-префиксом
export type AjvSchema<T> = JSONSchemaType<T>;

// Просто алиас с единым префиксом
export type AjvCompiler<T = unknown> = ValidateFunction<T>;

export { Ajv };
