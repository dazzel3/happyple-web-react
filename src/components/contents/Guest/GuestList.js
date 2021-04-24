import React from 'react';
import "../../../css/contents/GuestList.css"

function User({ user, onRemove }) {

    const { username, id, content} = user;
    return (
        <div className="result-container">
            <div className="result-section">
                <div className="result-user">{username}</div>
                <div className="result-content" >{content}</div>
                <button className="result-btn" onClick={() => onRemove(id)}>x</button>
            </div>
        </div>
    );
}

function GuestList({ users, onRemove }) {

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default GuestList;