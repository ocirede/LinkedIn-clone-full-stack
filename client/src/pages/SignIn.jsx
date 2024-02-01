import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    console.log("Sign in inputs==>>", "Email:", email, "Password:", password);
  };

  return (
    <>
      <div className="bg-gray-100 pt-10 pl-10">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
          alt=""
          className="h-10 "
        />
      </div>
      <div className="h-screen bg-gray-100 ">
      <div className="flex justify-center  h-1/2 items-center flex-col">
      <h1 className="text-3xl font-medium mb-4 pb-5">
            Make the most of your professional life
          </h1>
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6 ">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <p className="text-gray-600 text-sm mb-4">
            Stay updated on your professional world
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a className="text-sm text-blue-500 hover:text-blue-700" href="#">
                Forgot password?
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              New to LinkedIn?{" "}
              <Link to="/" className="text-blue-500 hover:text-blue-700">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignIn;
