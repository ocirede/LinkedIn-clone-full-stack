import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { PostContext } from "../context/postContext";

const Posts = () => {
  const { user } = useContext(UserContext);
  const {
    allPosts,
    handleLike,import React, { useState, useContext, useEffect } from "react";
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
    <div className="max-w-screen-md mx-auto">
      {user ? (
        <div className="space-y-4">
          {allPosts?.map((post) => (
            <div
              key={post._id}
              className="flex flex-col border border-gray-300 rounded p-4"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="mt-2">{post.content}</p>
              <div className="flex ">
                <div className="flex items-center justify-between mt-4 w-1/2">
                  <button
                    onClick={() => handleLike(post._id, user._id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Like ({post.likes.length})
                  </button>
                  <button
                    onClick={() => handleToggleCommentInput(post._id)}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                  >
                    Comment
                  </button>
                  <button
                    onClick={() => deletePost(post._id)}
                    className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 ${
                      user._id !== post.author._id &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={user._id !== post.author._id}
                  >
                    Delete
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

    deletePost,
    createComment,
    fetchComments,
    comments,
  } = useContext(PostContext);
  const [commentText, setCommentText] = useState("");
  const [showCommentInput, setShowCommentInput] = useState({});

  useEffect(() => {
    if (allPosts) {
      allPosts.forEach((post) => {
        fetchComments(post._id);
      });
    }
  }, [user, setCommentText]);

  console.log("comments", comments);

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

  return (
    <>
      {user ? (
        <>
          <div>
            <h2 className="text-xl font-bold mt-8 mb-4">Posts</h2>
            {allPosts?.map((post) => (
              <div key={post._id} className="mb-4 p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.content}</p>
                <div className="mt-2 flex justify-between">
                  <button
                    onClick={() => handleLike(post._id, user._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Like ({post.likes.length})
                  </button>
                  <button
                    onClick={() => handleToggleCommentInput(post._id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Comment
                  </button>
                  <button
                    onClick={() => {
                      deletePost(post._id);
                    }}
                    className={`bg-red-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                      user._id !== post.author._id
                        ? "cursor-not-allowed bg-gray-300"
                        : ""
                    }`}
                    disabled={user._id !== post.author._id}
                  >
                    Delete
                  </button>
                </div>
                {showCommentInput[post._id] && (
                  <div className="mt-4">
                    <input
                      type="text"
                      className="border border-gray-400 px-2 py-1 w-full"
                      placeholder="Write your comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button
                      onClick={() => handleCommentSubmit(post._id, user._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                )}
                {/* Render comments */}
                {comments?.map((comment, index) => (
                  <div key={index} className="mt-4 bg-gray-200 p-2 rounded">
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>There is no user</p>
      )}
    </>
  );
};

export default Posts;
