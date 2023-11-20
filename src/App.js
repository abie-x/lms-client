import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen";
import NavigationScreen from "./screens/NavigationScreen";
import AddStudentsScreen from "./screens/AddStudentsScreen";
import StudentModificationScreen from "./screens/StudentModificationScreen";
import CheckStudentDetailsScreen from "./screens/CheckStudentDetailsScreen";
import UpdateFeeStatusScreen from "./screens/UpdateFeeStatusScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path="/home" element={<NavigationScreen />} />
        <Route path="/addStudents" element={<AddStudentsScreen />} />
        {/* <Route path="/modifyStudents" element={<StudentModificationScreen /> } /> */}
        <Route path="/modifyStudents" element={<CheckStudentDetailsScreen /> } />
        {/* <Route path="/checkStudent" element={<CheckStudentDetailsScreen />} /> */}
        <Route path="/updateFee" element={<UpdateFeeStatusScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
