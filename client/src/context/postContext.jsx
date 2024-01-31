import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../config/api.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext.jsx";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState();
  const [updatedPost, setUpdatedPost] = useState();
  const [selectedPost, setSelectedPost] = useState();

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const createPost = async (
    title,
    content,
    priority,
    completed,
    selectedUser
  ) => {
    try {
      const response = await axios.post(baseURL + `/posts/createpost`, {
        title,
        content,
        priority,
        completed,
        selectedUser,
        author: user._id,
      });

      navigate("/home");

      console.log("New Post:", response.data);
    } catch (error) {
      console.error("Error creating new Post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(
        baseURL + `/todos/deletetodo/${postId}`
      );
      console.log("Post deleted:", response.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (postId, updatedData) => {
    try {
      const response = await axios.put(
        baseURL + `/posts/editpost/${postId}`,
        updatedData
      );

      if (response.data.success) {
        setUpdatedPost(response.data.todo);

        navigate("/home");
        console.log("Post updated successfully!", response.data.post);
      }
    } catch (error) {
      console.error("Error editing the post", error);
    }
  };

  const findPost = async (postId) => {
    try {
      const response = await axios.get(baseURL + `/posts/${postId}`);

      if (response.data.success) {
        setSelectedPost(response.data.todo);
        console.log("Post found successfully!", response.data.todo);
      }
    } catch (error) {
      console.error("Error finding the post", error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //const response = await axios.get(baseURL + `/todos/fetchtodos`);
        // setAllTasks(response.data.posts);
        // console.log("fetch all posts context", response.data.posts);
      } catch (error) {
        console.error("Error fetching the posts", error);
      }
    };

    fetchPosts();
  }, [setUpdatedPost]);

  return (
    <PostContext.Provider
      value={{
        createPost,
        deletePost,
        editPost,
        findPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
