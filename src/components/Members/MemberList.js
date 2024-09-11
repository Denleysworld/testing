import React, { useState, useEffect } from 'react';

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/members', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMembers(data);
          setLoading(false);
        } else {
          setError('Failed to load members');
        }
      } catch (error) {
        setError('Error loading members:', error);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {members.map((member) => (
        <li key={member.id}>
          {member.first_name} {member.last_name} ({member.email})
        </li>
      ))}
    </ul>
  );
};

export default MemberList;