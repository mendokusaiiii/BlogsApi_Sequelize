const { User } = require('../models');
const { validateUserCreate } = require('./validations/validateSchemas');

const userLogin = async ({ email }) => User.findOne({ where: { email } });

const createUser = async ({ email, displayName, password }) => {
  const error = validateUserCreate({ email, displayName, password });  
  if (error.type) return error;
  const check = await User.findOne({ where: { email } });  
  if (check) return { type: 409, message: 'User already registered' };  
  const register = await User.create({ email, displayName, password });  
  return { type: null, message: register };
};

const getAllUsers = async () => {
  const findAllUsers = await User.findAll();
  const result = findAllUsers.map(({ dataValues: { password, ...rest } }) => rest);
  return result;
}; 

const getUserById = async (id) => {
  const findUserById = await User.findByPk(id);
  if (!findUserById) return { type: 404, message: 'Id not found' };
  const { dataValues: { password, ...rest } } = findUserById;
  return rest;
};

module.exports = {
  userLogin,
  createUser,
  getAllUsers,
  getUserById,
};