const { BlogPost, Category, User } = require('../models');

const findAllPosts = async () => BlogPost.findAll({
  include: [{
  model: Category,
  as: 'categories',
  through: { attributes: [] } }, {
  model: User, as: 'user', attributes: { exclude: ['password'] },
      },
    ], 
  });

module.exports = {
  findAllPosts,
};