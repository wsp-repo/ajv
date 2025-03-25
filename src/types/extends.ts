import { Options } from 'ajv';

import { AjvSchema } from './aliases';

type OmitedOptions = Omit<Options, 'allErrors'>;

export type AjvOverrider = (globalConfig: OmitedOptions) => OmitedOptions;

export type AjvOptions = OmitedOptions | AjvOverrider;

export type AjvValidator<T = unknown> = (
  data: T,
  schema?: AjvSchema<T>,
) => data is T;
