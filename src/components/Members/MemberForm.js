// src/MemberForm.js
import React, { useState, useEffect } from 'react';

const MemberForm = ({ onAddMember, onUpdateMember, editingMember }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    booksBorrowed: ''
  });

  useEffect(() => {
    if (editingMember) {
      setFormData(editingMember); // Populate form with existing member data
    } else {
      setFormData({ firstName: '', lastName: '', email: '', phone: '', booksBorrowed: '' });
    }
  }, [editingMember]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingMember) {
      onUpdateMember({ ...formData, id: editingMember.id }); // Update member
    } else {
      // Add a new member
      onAddMember({
        ...formData,
        id: Date.now(),
        dateJoined: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
      });
    }

    // Clear the form
    setFormData({ firstName: '', lastName: '', email: '', phone: '', booksBorrowed: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="booksBorrowed"
        placeholder="Books Borrowed"
        value={formData.booksBorrowed}
        onChange={handleChange}
      />
      <button type="submit">{editingMember ? 'Update Member' : 'Add Member'}</button>
    </form>
  );
};

export default MemberForm;