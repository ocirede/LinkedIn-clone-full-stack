import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserContextProvider from "./context/userContext";
import PostContextProvider from "./context/postContext";
import HomeLayout from "./layouts/homeLayout";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <PostContextProvider>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="/home" element={<HomePage />} />
              </Route>
              <Route element={<MainLayout />}>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<SignUp />} />
              </Route>
            </Routes>
          </PostContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
