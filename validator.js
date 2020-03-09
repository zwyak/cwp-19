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
};

exports.check = function (schema, body) {
  if (!schemas[schema])  return {};

  return Joi.validate(body, schemas[schema], { presence: 'required' });
};
