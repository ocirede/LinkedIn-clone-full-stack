import mongoose from "mongoose";


const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

export default Post;
