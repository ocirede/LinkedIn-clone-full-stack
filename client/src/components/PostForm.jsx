import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { PostContext } from "../context/postContext";

const PostForm = () => {
  const { user } = useContext(UserContext);
  const { createPost } = useContext(PostContext);

  return (
    <>
      {user ? (
        <>

          <div className="w-full">
            <form onSubmit={handleSubmit} >

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title:
                </label>
                <input
                  className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl"
                  id="title"
                  type="text"
                  placeholder="Title"
                  name="title"

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
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="content"
                  placeholder="Start a Post"
                  name="content"
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Post
              </button>
              <input type="file" name="postImage" />
            </form>
          </div>
        </>
      ) : (
        <p>There is no user</p>
      )}
    </>
  );
};

export default PostForm;
