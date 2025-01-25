import "./index.css";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Product from "./pages/Product";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Admin from "./pages/Admin";
import Dashboard from "../src/components/dashboardComponents/Dashboard";
import Customers from "./pages/Customers";
import Payment from "./pages/Payment";
import User from "./pages/User";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <GoogleOAuthProvider clientId="799455265041-4e660qpe66qgv6ru8pm449v1vp92un3m.apps.googleusercontent.com">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar
            scrollToHome={() => scrollToSection(homeRef)}
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToContact={() => scrollToSection(contactRef)}
          />

          <div>
            <section ref={homeRef}>
              <Home />
            </section>
            <section ref={aboutRef}>
              <About />
            </section>
            <section ref={contactRef}>
              <Contact />
            </section>
          </div>

          <div className="flex-grow bg-[#3C3D37] scrollbar-hide">
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin" element={<Admin />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="customers" element={<Customers />} />
                <Route path="payment" element={<Payment />} />
              </Route>

              {/* User Route */}
              <Route path="/user/:id" element={<User />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
