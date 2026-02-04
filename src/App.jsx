import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landing from "./pages/Landing";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Draw from "./pages/Draw";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ Navbar added here */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </BrowserRouter>
  );
}
