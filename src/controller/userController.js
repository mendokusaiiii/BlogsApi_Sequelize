const jwt = require('jsonwebtoken');
const { userService } = require('../service');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
  const { email } = req.body;
  
  const login = await userService.userLogin({ email });
  if (!login) return res.status(400).json({ message: 'Invalid fields' });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type) return res.status(type).json({ message });
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { message } }, secret, jwtConfig);
  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const result = await userService.getAllUsers();  
  return res.status(200).json(result);
};

const getUsersById = async (req, res) => {
const result = await userService.getUserById(req.params.id);
if (result.type) return res.status(404).json({ message: 'User does not exist' });
return res.status(200).json(result);
};

module.exports = {
  userLogin,
  createUser,
  getAllUsers,
  getUsersById,
};