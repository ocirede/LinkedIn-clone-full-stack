import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>This is home</p>
      <Link to="signin">Sign-in</Link>
      <Link to="signup">Sign-up</Link>
    </>
  );
};
export default Home;
