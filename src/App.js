import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen";
import NavigationScreen from "./screens/NavigationScreen";
import AddStudentsScreen from "./screens/AddStudentsScreen";
import AddStudentsScreenModified from "./screens/AddStudentsScreenModified";
import StudentModificationScreen from "./screens/StudentModificationScreen";
import CheckStudentDetailsScreen from "./screens/CheckStudentDetailsScreen";
import UpdateFeeStatusScreen from "./screens/UpdateFeeStatusScreen";
import UpdateStudentScreen from "./screens/UpdateStudentScreen";
import TestingScreen from "./screens/TestingScreen";
import AdminHomeScreen from "./screens/AdminHomeScreen";
import AddStudentsScreenNew from "./screens/AddStudentsScreenNew";
import { CheckStudentDetailsScreenNew } from "./screens/CheckStudentDetailsScreenNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path="/home" element={<NavigationScreen />} />
        <Route path="/addStudents" element={<AddStudentsScreen />} />
        <Route path="/newstudent" element={<AddStudentsScreenNew />} />
        {/* <Route path="/modifyStudents" element={<AddStudentsScreenModified /> } /> */}
        <Route path="/checkStudent" element={<CheckStudentDetailsScreenNew /> } />
        <Route path="/modifyStudent" element={<StudentModificationScreen />} />
        {/* <Route path="/modifyStudent" element={<UpdateStudentScreen />} /> */}
        
        <Route path="/updateFee" element={<UpdateFeeStatusScreen />} />
        <Route path="/updateStudent" element={<UpdateStudentScreen />} />
        <Route path="/test" element={<TestingScreen />} />
        <Route path="/adminview" element={<AdminHomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
