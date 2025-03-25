import { isArray, isEmpty } from '@zalib/core';
import { ErrorObject } from 'ajv';

/**
 * Класс ошибок валидации
 */
export class AjvError extends Error {
  constructor(errors?: ErrorObject[] | string | null) {
    if (isEmpty(errors)) {
      super('Unknown validation error');
    } else if (isArray<ErrorObject>(errors)) {
      const strErrors = errors
        .map(({ schemaPath, message }) => `${schemaPath} - ${message}`)
        .join('\n');

      super(`Validation error:\n${strErrors}`);
    } else {
      super(String(errors));
    }
  }
}
