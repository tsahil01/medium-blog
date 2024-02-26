import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import { HeroParallaxDemo } from "./components/Hero";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/signin" element={ <Signin/> }/> 
        <Route path="/" element={ <HeroParallaxDemo/> }/> 
        <Route path="/signup" element={ <Signup/> }/> 
        <Route path="/blog/:id" element={ <Blog/> }/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}w