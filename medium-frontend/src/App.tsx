import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { FloatingNavDemo } from "./components/aceternity/NavbarFloating"

function App() {
  return (
    <>
    <FloatingNavDemo/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
