import { Options } from 'ajv';

// база максимально строгая
export const baseOptions: Options = {
  $comment: true,

  $data: true,

  // ошибка при первом нарушении схемы
  allErrors: false,

  // запрет автоконвертации типов
  coerceTypes: false,

  // удаление лишнего
  removeAdditional: true,

  // строгие проверки
  strict: true,

  useDefaults: true,

  validateSchema: true,
};
