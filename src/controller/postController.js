const { postService } = require('../service');

const findAllPosts = async (_req, res) => {
const result = await postService.findAllPosts();
return res.status(200).json(result);
};

module.exports = {
  findAllPosts,
};