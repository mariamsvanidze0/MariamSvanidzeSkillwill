import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import "./styles/main.scss";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Layout */}
        <Route element={<Layout layoutType="public" />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Route>

        {/* Protected Layout */}
        <Route element={<Layout layoutType="protected" />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
