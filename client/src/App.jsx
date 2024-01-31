import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserContextProvider from "./context/userContext";
import PostContextProvider from "./context/postContext";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <PostContextProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<SignUp />} />
            </Routes>
          </PostContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
