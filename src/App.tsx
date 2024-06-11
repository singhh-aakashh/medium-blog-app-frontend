import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import {Signin} from "./pages/Signin"
import Blog from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Write } from "./pages/Write"
import { Home } from "./pages/Home"
import { UserBlog } from "./pages/UserBlogs"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/write" element={<Write/>} />
      <Route path="/user/blogs" element={<UserBlog/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App