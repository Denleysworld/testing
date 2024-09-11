// src/EditMemberForm.js
import React, { useState, useEffect } from 'react';


const EditMemberForm = ({ memberToEdit, onUpdateMember, onClose }) => {
  const [formData, setFormData] = useState(memberToEdit);

  useEffect(() => {
    setFormData(memberToEdit);
  }, [memberToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateMember(formData); // Update member
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Member</h2>
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
          <button type="submit">Update Member</button>
        </form>
      </div>
    </div>
  );
};

export default EditMemberForm;
