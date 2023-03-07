const { categoryService } = require('../service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const createOneCategory = await categoryService.createCategory({ name });
  if (createOneCategory.type) return res.status(400).json({ message: '"name" is required' });

  return res.status(201).json(createOneCategory.message);
};

const findAllCategories = async (_req, res) => {
  const result = await categoryService.findAllCategories();
  return res.status(200).json(result);
};
module.exports = {
  createCategory,
  findAllCategories,
};
