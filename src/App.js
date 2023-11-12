import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen";
import NavigationScreen from "./screens/NavigationScreen";
import AddStudentsScreen from "./screens/AddStudentsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path="/home" element={<NavigationScreen />} />
        <Route path="/addstudents" element={<AddStudentsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
