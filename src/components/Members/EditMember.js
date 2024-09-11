import React, { useState } from 'react';

const EditMember = ({ match }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateMember = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/members/${match.params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
      });

      if (response.ok) {
        // Navigate back to the member details page
        navigate(`/members/${match.params.id}`);
      } else {
        console.error('Failed to update member');
      }
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  return (
    <form onSubmit={handleUpdateMember}>
      <h2>Edit Member</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Update Member</button>
    </form>
  );
};

export default EditMember;