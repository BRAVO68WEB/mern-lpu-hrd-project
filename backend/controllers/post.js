exports.getAllPosts = (req, res, next) => {
  res.status(200).json({
    title: "My First Post",
    like: 10,
  });
};

exports.addNewPost = (req, res, next) => {
  const title = req.body.title;
  const likes = req.body.likes;
  res.status(201).json({
    status: "success",
    message: "Post Added successfully",
    data: { id: new Date(), title: title, likes: likes },
  });
};
