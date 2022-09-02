import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="*" element={<Navigate to="/login" replace />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/subscriptions" element={<Subscribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
