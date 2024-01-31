import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../config/api.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext.jsx";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState();

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

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(baseURL + `/posts/delete/${postId}`);
      console.log("Post deleted:", response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (postId, userId) => {
    try {
      const response = await axios.put(
        `${baseURL}  /posts/${postId}/${userId} `
      );

      const likedPost = response.data;

      likedPost.likes.push(userId);

      console.log("Liked Post:", likedPost);

      setAllPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === likedPost._id ? likedPost : post))
      );
    } catch (error) {
      console.error("Error liking the post", error);
    }
  };

  const handleLike1 = async (postId, userId) => {
    try {
      const response = await axios.put(
        `${baseURL}  /posts/${postId}/${userId} `
      );
      console.log(response.data);
      const newPosts = allPosts.map((post) => {
        if (post._id === postId) {
          return data;
        } else {
          return post;
        }
      });
      setAllPosts(newPosts);
    } catch (error) {
      console.error("Error liking the post", error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(baseURL + `/posts/get`);
        setAllPosts(response.data);
        console.log("fetch all posts context:", response.data);
      } catch (error) {
        console.error("Error fetching the posts", error);
      }
    };

    fetchPosts();
  }, [createPost, handleLike, deletePost]);

  return (
    <PostContext.Provider
      value={{
        allPosts,
        handleLike,
        createPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
