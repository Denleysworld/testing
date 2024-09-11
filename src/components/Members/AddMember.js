import React, { useState } from 'react';

const AddMember = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddMember = async (e) => {
    e.preventDefault();
    // API call to create a new member
    try {
      const response = await fetch('/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
      });

      if (response.ok) {
        // Navigate back to the member list
        navigate('/members');
      } else {
        console.error('Failed to add member');
      }
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <form onSubmit={handleAddMember}>
      <h2>Add New Member</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;