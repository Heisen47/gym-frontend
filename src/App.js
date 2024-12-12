import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
