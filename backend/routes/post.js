const express = require("express");
const postController = require("../controllers/post");
const router = express.Router();

// GET /posts/
router.get("/", postController.getAllPosts);

// POST /posts/add
router.post("/add", postController.addNewPost);

module.exports = router;
