# Package @zalib/ajv

## Getting started

```
npm i @zalib/ajv
```

## Use helpers

```
type Str = {
    str: string;
}

const schema: AjvSchema<Str> = {
    properties: {
        str: {
            errorMessage: {
                minLength: 'Кастомная ошибка минимальной длины',
                validate: 'Кастомная ошибка валидатора',
            },

            minLength: 2,
  
            type: 'string',
  
            validate: (value: string) => {
                return value === 'ok';
            },
        }
  },

  required: ['str'],

  type: 'object'
};

const ajv = ajvFactory();
  
const val = ajv.validate(schema, { str: '1' });

// или

const compiler = ajv.compile(schema);
const val = compiler({ str: '1' });
```

## Important

Data mutation occurs during the validation process.