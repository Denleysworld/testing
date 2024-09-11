// src/AddMember.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMember = ({ addMember }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [booksBorrowed, setBooksBorrowed] = useState(0);
  const navigate = useNavigate();

  const handleAddMember = (e) => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      dateJoined: new Date().toISOString().split("T")[0], // Automatic date
      booksBorrowed,
    };

    addMember(newMember); // Add the new member using the prop function

    navigate("/"); // Redirect back to the member list
  };

  return (
    <div>
      <h1>Add New Member</h1>
      <form onSubmit={handleAddMember}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="number" placeholder="Books Borrowed" value={booksBorrowed} onChange={(e) => setBooksBorrowed(e.target.value)} />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
