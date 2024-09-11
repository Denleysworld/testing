import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MemberDetails = ({ match }) => {
  const [member, setMember] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios.get(`/members/${match.params.id}`)
      .then(response => {
        setMember(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/members/${match.params.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        // Navigate back to the member list
        history.push('/members');
      } else {
        console.error('Failed to delete member');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const handleEdit = () => {
    // Navigate to the edit member page
    history.push(`/members/${match.params.id}/edit`);
  };

  return (
    <div>
      <h2>Member Details</h2>
      <p>First Name: {member.first_name}</p>
      <p>Last Name: {member.last_name}</p>
      <p>Email: {member.email}</p>
      <button onClick={handleDelete}>Delete Member</button>
      <button onClick={handleEdit}>Edit Member</button>
    </div>
  );
};

export default MemberDetails;