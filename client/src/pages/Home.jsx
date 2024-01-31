import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? <p>Hello {user.username}</p> : <p>There is no user</p>}

      <Link to="signin">Sign-in</Link>
      <Link to="signup">Sign-up</Link>
    </>
  );
};
export default Home;
