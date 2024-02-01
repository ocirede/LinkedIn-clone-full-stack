
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserContextProvider from "./context/userContext";
import PostContextProvider from "./context/postContext";


function App() {
  return (
    <>
      <BrowserRouter>

        <UserContextProvider>
          <PostContextProvider>
     <div className="mb-14">
   <Navbar/>
   </div>
            <Routes>
            
                <Route path="/home" element={<HomePage />} />

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


