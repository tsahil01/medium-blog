import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { FloatingNavDemo } from "./components/aceternity/NavbarFloating"
import Blogs from "./components/Blogs"
import Blog from "./components/Blog"

function App() {
  return (
    <>
    <FloatingNavDemo/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/blog" element={<Blog />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
