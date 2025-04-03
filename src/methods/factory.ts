import { deepClone, isFunction } from '@zalib/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
import Ajv, { Options } from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';
import ajvKeywords from 'ajv-keywords';

import { AjvOptions, AjvOverrider, AjvSchema, AjvValidator } from '../types';

import { baseOptions } from '../constants';

/**
 * Возвращает набор опций для создания AJV инстанса
 */
export function ajvOptions(options?: AjvOptions): Options {
  const callOptions = isFunction<AjvOverrider>(options)
    ? options(deepClone(baseOptions))
    : options;

  // фиксированные опции
  const fixedOptions: Options = { allErrors: true };

  /* prettier-ignore */
  return deepClone(
    { ...baseOptions, ...callOptions, ...fixedOptions },
    true,
  );
}

/**
 * Создает объект AJV-валидатора
 */
export function ajvFactory(options?: AjvOptions): Ajv {
  const ajv = new Ajv(ajvOptions(options));

  ajvKeywords(ajv);
  ajvFormats(ajv);
  ajvErrors(ajv);

  ajv.addKeyword({
    keyword: 'validate',
    validate: <T>(
      validator: AjvValidator<T>,
      value: T,
      schema?: AjvSchema<T>,
    ) => {
      if (schema) {
        // eslint-disable-next-line
        const { validate: _, ...preSchema } = schema;

        if (!ajv.validate(preSchema, value)) {
          return false;
        }

        /* prettier-ignore */
        return value !== null
          ? validator(value, schema)
          : true;
      }

      return validator(value);
    },
  });

  return ajv;
}
