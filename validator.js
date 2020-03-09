const Joi = require('joi');

const schemas = {
  '/signin': Joi.object().keys({
    login: Joi.string(),
    password: Joi.string(),
  }),

  '/signup': Joi.object().keys({
    login: Joi.string(),
    password: Joi.string().min(10),
    email: Joi.string().email().optional(),
    inviteBy: Joi.string().optional(),
    birth: Joi.date().max('1-1-1999'),
    sex: Joi.string().valid('male', 'female'),
    agreedWithTerms: Joi.boolean().valid(true)
  }),

  '/drinks': Joi.object().keys({
    name: Joi.string().min(3).max(50),
    strength: Joi.number().positive(),
    code: Joi.string().regex(/[A-Za-z0-9_]/),
    alcoholic: Joi.boolean().when('strength', {
        is: Joi.number().greater(0),
        then: Joi.boolean().valid(true)
    })
  }),

  '/recieps': Joi.object().keys({
    name: Joi.string(),
    ingredients: Joi.array().items(
      Joi.object({
        name: Joi.string().guid({
          version: [
            'uuidv4',
            'uuidv5'
          ]
        }),
        weight: Joi.number().integer().positive(),
        photos: Joi.array().items(Joi.string()).optional()
      })
    ).min(2),
    photos: Joi.array().items(Joi.string()).optional(),
    portions: Joi.alternatives().try(Joi.number(), Joi.string())
  })

};

exports.check = function (schema, body) {
  if (!schemas[schema])  return {};

  return Joi.validate(body, schemas[schema], { presence: 'required' });
};
