const postService = require('../services/post.service');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await postService.getPosts();
    res.send(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.send(post);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
