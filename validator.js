const Joi = require('joi');

const schemas = {
  '/signin': Joi.object().keys({
    login: Joi.string(),
    password: Joi.string(),
  }),
};

exports.check = function (schema, body) {
  if (!schemas[schema])  return {};

  return Joi.validate(body, schemas[schema], { presence: 'required' });
};
