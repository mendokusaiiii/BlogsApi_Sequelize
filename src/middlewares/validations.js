require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  console.log(token);
  try {
  jwt.verify(token, secret);
  next();
} catch (error) {
  console.log(error);
  return res.status(401).json({ message: 'Expired or invalid token' });
}
};

const validateBodyContent = (email, password) => email && password;

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!validateBodyContent(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing',
  });
}
return next();
};

module.exports = {
  validateJWT,
  validateLogin,
};