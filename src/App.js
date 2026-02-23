import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
<h2>Deployment test update</h2>
  };

  return (
    <div className="App">
      <h1>Studen ID: 101601533</h1>
      <h1>Studen ID: Rohail Bhatti</h1>
      <h1>Student Information System</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developerd By: Pritesh Patel
      <StudentList students={students} />
    </div>
  );
};

export default App;
