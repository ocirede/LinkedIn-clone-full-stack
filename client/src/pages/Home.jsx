import { useContext } from "react";
import { UserContext } from "../context/userContext";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {user ? (
        <>
          <p>Hello {user.username}</p>
          <PostForm />
          <Posts />
        </>
      ) : (
        <p>There is no user</p>
      )}
    </div>
  );
};

export default Home;
