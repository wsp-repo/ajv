import { Ajv, AjvCompiler, AjvError } from '../types';

/**
 * Просто хелпер для выброса исключения при ошибках
 * - может и не нужен он вообще - время покажет
 */
export function ajvErrors(validator: Ajv | AjvCompiler): void {
  const { errors } = validator;

  if (errors?.length === 0) return;

  throw new AjvError(validator?.errors || 'Unknown schema error');
}
