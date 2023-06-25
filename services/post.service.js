const postRepository = require('../repositories/post.repository');
const HttpException = require('../exceptions/http-exception')

exports.getPosts = async () => {
  throw new HttpException(500, 'Service Error');
};

exports.getPostById = async (id) => {
  return await postRepository.getPostById(id);
};

exports.createPost = async (post) => {
  return await postRepository.createPost(post);
};
