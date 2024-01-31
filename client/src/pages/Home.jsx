import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { PostContext } from "../context/postContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const { allPosts, handleLike, createPost, deletePost } =
    useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    createPost(title, content);
    console.log(content, title);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {user ? (
        <div>
          <p>Hello {user.username}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Content:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Post
            </button>
          </form>
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
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>There is no user</p>
      )}
    </div>
  );
};

export default Home;
