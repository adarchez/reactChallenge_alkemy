import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import LoginForm from "./LoginForm";

const RouterHandle = () => {
  const {auth} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route exact path="/login" element={ auth ? <Home /> : <LoginForm /> } />
        <Route exact path="*" element={<PrivateRoute><NotFound /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default RouterHandle;