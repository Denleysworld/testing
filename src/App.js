// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MemberList from "./components/Members/MemberList";
import AddMember from "./components/Members/AddMember";
import './App.css';

function App() {
  const [members, setMembers] = useState([
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", phone: "1234567890", dateJoined: "2024-09-10", booksBorrowed: 2 },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", phone: "0987654321", dateJoined: "2024-09-08", booksBorrowed: 1 },
  ]);

  // Function to add a new member
  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="nav-link">Member List</Link>
          <Link to="/add" className="nav-link add-button">Add Member</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MemberList members={members} />} />
          <Route path="/add" element={<AddMember addMember={addMember} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
