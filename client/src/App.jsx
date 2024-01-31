import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserContextProvider>
          <PostContextProvider> */}
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<SignUp />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          {/* </PostContextProvider>
        </UserContextProvider> */}
      </BrowserRouter>
    </>
  );
}
export default App;









