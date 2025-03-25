import { ajvFactory } from '../src';
import { exampleSchema } from './common';

const ajv = ajvFactory();

const data = {
  optString: 'ok',
  reqString: null,
};

console.warn('Data input: ', JSON.stringify(data, null, 2));

const valid = ajv.validate(exampleSchema, data);

console.warn(`Result = ${valid}`, ajv.errors);
