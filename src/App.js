import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Product from "./pages/Product";
import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {

  return (
    <GoogleOAuthProvider clientId="799455265041-4e660qpe66qgv6ru8pm449v1vp92un3m.apps.googleusercontent.com">
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow bg-[#7A1CAC] -z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
