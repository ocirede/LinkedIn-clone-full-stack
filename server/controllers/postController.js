import Post from "../models/postSchema.js";

export const addPost = async (req, res) => {
  try {
    if (req.file) req.body.image = req.file.filename;
    console.log("Add post here", req.body);
    const newPost = new Post(req.body);
    await newPost.save();
    await newPost.populate("author");
    res.json(newPost);
    console.log("Post created successfully:", newPost);
  } catch (error) {
    console.error("Error creating the post", error.message);
    res.send({ success: false, error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const findThemAll = await Post.find().populate("author").populate("likes");
    res.json(findThemAll);
  } catch (error) {
    console.log("🚀 ~ error in getAll:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const handleLike = async (req, res) => {
  try {
    const { postId, userId } = req.params;
    console.log("params", req.params);
    const post = await Post.findById(postId);
    const isLiked = post.likes.includes(userId);

    if (isLiked) {
      post.likes = post.likes.filter((id) => id.toString() !== userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();
    await post.populate("likes");
    await post.populate("author");

    res.json(post);
  } catch (error) {
    console.log("🚀 ~ error in handleLike:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const handleDelete = async (req, res) => {
  const { postId } = req.params;

  try {
    const findPost = await Post.findByIdAndDelete(postId);
    if (!findPost) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
