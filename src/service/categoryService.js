const { Category } = require('../models');
const { validateNameSchema } = require('./validations/validateSchemas');

const createCategory = async ({ name }) => {
  const error = validateNameSchema(name);
  if (error.type) return { type: error.type, message: error.message };
  const response = await Category.create({ name });
  return { type: null, message: response };
};

const findAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  findAllCategories,
};
