import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(username, email, password);
    console.log(
      "Sign up inputs==>>",

      "User Name:",
      username,
      "Email:",
      email,
      "Password:",
      password
    );
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
      <div className="flex justify-center  h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-medium mb-4 pb-5">
            Make the most of your professional life
          </h1>
          <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2 text-left" // Added text-left class here
                  htmlFor="lastName"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2 text-left" // Added text-left class here
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
                  className="block text-sm font-bold mb-2 text-left" // Added text-left class here
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
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign up now
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600">
              Already on LinkedIn?{" "}
              <Link to="/signin" className="text-blue-500 hover:text-blue-700">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
