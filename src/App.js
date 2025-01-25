import "./index.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Admin from "./pages/Admin";
import Dashboard from "../src/components/dashboardComponents/Dashboard";
import Customers from "./pages/Customers";
import Payment from "./pages/Payment";
import User from "./pages/User";

function App() {

  return (
    <GoogleOAuthProvider clientId="799455265041-4e660qpe66qgv6ru8pm449v1vp92un3m.apps.googleusercontent.com">
      <Router>
        <Navbar/>

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="payment" element={<Payment />} />
          </Route>

          {/* User Route */}
          <Route path="/user/:id" element={<User />} />
        </Routes>

        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
