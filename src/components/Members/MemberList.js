// src/MemberList.js
import React from "react";

const MemberList = ({ members }) => {
  return (
    <div>
      <h1>Member List</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.firstName} {member.lastName} - {member.email}
            <div>
              <strong>Phone:</strong> {member.phone} | <strong>Date Joined:</strong> {member.dateJoined} | <strong>Books Borrowed:</strong> {member.booksBorrowed}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
