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

  const createPost = async (title, content) => {
    try {
      const response = await axios.post(baseURL + `/posts/add`, {
        title,
        content,
        author: user._id,
        likes: [],
      });

      navigate("/home");

      console.log("New Post:", response.data);
    } catch (error) {
      console.error("Error creating new Post:", error);
    }
  };

  const editPost = async (postId, updatedData) => {
    try {
      const response = await axios.put(
        baseURL + `/posts/editpost/${postId}`,
        updatedData
      );

      if (response.data) {
        setUpdatedPost(response.data.todo);

        navigate("/home");
        console.log("Post updated successfully!", response.data.post);
      }
    } catch (error) {
      console.error("Error editing the post", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(baseURL + `/posts/delete/${postId}`);
      console.log("Post deleted:", response.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (postId, authorId) => {
    try {
      const response = await axios.put(
        `${baseURL}/posts/${postId}/${authorId}`
      );

      const likedPost = response.data.post;

      likedPost.likes.push(authorId);

      console.log("Liked Post:", likedPost);

      setAllPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === likedPost._id ? likedPost : post))
      );
    } catch (error) {
      console.error("Error liking the post", error);
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
        //const response = await axios.get(baseURL + `/posts/get`);
        // setAllPosts(response.data.posts);
        // console.log("fetch all posts context:", response.data.posts);
      } catch (error) {
        console.error("Error fetching the posts", error);
      }
    };

    fetchPosts();
  }, [setUpdatedPost]);

  return (
    <PostContext.Provider
      value={{
        allPosts,
        handleLike,
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
