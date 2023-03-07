const Joi = require('joi');

const validateRegistration = Joi.object({
  email: Joi.string().email().required(),
  displayName: Joi.string().min(8).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateName = Joi.string().required().label('name');

const validateUserCreate = (user) => {
const { error } = validateRegistration.validate(user);
if (error) return { type: 400, message: error.message };

return { type: null, message: '' };
};

const validateNameSchema = (name) => {
  const { error } = validateName.validate(name);
  if (error) return { type: 401, message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateUserCreate,
  validateNameSchema,
};