import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { PostContext } from "../context/postContext";

const Posts = () => {
  const { user } = useContext(UserContext);
  const {
    allPosts,
    handleLike,
    deletePost,
    createComment,
    fetchComments,
    comments,
  } = useContext(PostContext);
  const [commentText, setCommentText] = useState("");
  const [showCommentInput, setShowCommentInput] = useState({});
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleToggleCommentInput = (postId) => {
    setShowCommentInput((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleCommentSubmit = async (postId, userId) => {
    createComment(commentText, postId, userId);
    console.log("Comment submit:", postId, userId, commentText);
    handleToggleCommentInput(postId);
    setCommentText("");
  };

  const handleFetchComments = (postId) => {
    if (!postId) return;
    fetchComments(postId);
    console.log("Fetching comments for post with ID:", postId);
    setSelectedPostId(postId);
  };
  useEffect(() => {
    handleFetchComments();
  }, []);

  return (
    <div className="w-full mx-auto">
      {user ? (
        <div className="space-y-4">
          {allPosts?.map((post) => (
            <div
              key={post._id}
              className="w-full bg-white flex flex-col border border-gray-300 rounded-xl p-4"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="mt-2">{post.content}</p>
              <div className="flex ">
                <div className="flex items-center justify-between mt-4 w-1/2">
                  <button
                    onClick={() => handleLike(post._id, user._id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <i class="fa-regular fa-thumbs-up fa-xl"></i> ({post.likes.length})
                  </button>
                  <button
                    onClick={() => handleToggleCommentInput(post._id)}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                  >
                    <i class="fa-regular fa-comment fa-xl"></i>
                  </button>
                  <button
                    onClick={() => deletePost(post._id)}
                    className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 ${
                      user._id !== post.author._id &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={user._id !== post.author._id}
                  >
                    <i class="fa-solid fa-trash fa-xl"></i>
                  </button>
                </div>
                <div className="flex justify-end w-1/2">
                  {!selectedPostId && (
                    <button
                      onClick={() => handleFetchComments(post._id)}
                      className="text-blue-500 mt-2 block"
                    >
                      Show Comments
                    </button>
                  )}
                </div>
              </div>
              {showCommentInput[post._id] && (
                <div className="mt-4">
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Write your comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    onClick={() => handleCommentSubmit(post._id, user._id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Submit
                  </button>
                </div>
              )}
              {selectedPostId === post._id && comments && (
                <div className="mt-4">
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 border border-gray-300 rounded p-2"
                    >
                      <p>{comment.content}</p>
                    </div>
                  ))}
                </div>
              )}
              {selectedPostId === post._id && (
                <button
                  onClick={() => setSelectedPostId(null)}
                  className="text-blue-500 mt-2 block"
                >
                  Hide Comments
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>There is no user</p>
      )}
    </div>
  );
};

export default Posts;
