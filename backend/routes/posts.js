const express = require("express");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

const PostController = require("../controllers/posts");

//add post method
router.post("", checkAuth, extractFile, PostController.createPost);

//update method
router.put("/:id", checkAuth, extractFile, PostController.updatePost);

//get all posts
router.get("", PostController.getPosts);

//get one post for update
router.get("/:id", PostController.getPost);

//delete post
router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
