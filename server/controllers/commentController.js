import Comment from "../models/commentSchema.js";

export const createComment = async (req, res) => {
  try {
    const { userId } = req.params;
    const { postId } = req.params;
    console.log("params===>>", req.params);
    console.log("Received postID creating comment:", postId);

    const { content } = req.body;

    const newComment = new Comment({
      content,
      post: postId,
      user: userId,
    });

    await newComment.save();
    await newComment.populate("author");

    res.json(newComment);
    console.log(newComment);
  } catch (error) {
    console.log(error);
  }
};

export const getAllComments = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log("Received postID:", postId);

    const comments = await Comment.find({ post: postId })
      .populate("author")
      .populate("post");
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
};
