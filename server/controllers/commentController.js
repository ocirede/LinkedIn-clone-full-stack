import Comment from "../models/commentSchema.js";

export const createComment = async (req, res) => {
  try {
    const { content, post: postId, author: userId } = req.body;
    console.log("body",req.body)
    const newComment = new Comment({
      content,
      post: postId,
      author: userId,
    });

    await newComment.save();
    await newComment.populate("author");
    await newComment.populate("post")
    console.log({newComment});
    res.json(newComment);
    console.log(newComment);
    console.log("user comments", userId);
    console.log("Received postID creating comment:", postId);
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
