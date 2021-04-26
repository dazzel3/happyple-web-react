import React from 'react';

function User({ user}) {

    const { code, content } = user;
    return (
        <div className="result-container">
            <div className="result-section">
                <div className="result-user">{code}</div>
                <div className="result-content">{content}</div>
            </div>
        </div>
    );
}

function BbibbiList({ users, onSearch}) {

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.code} onSearch={onSearch}/>
      ))}
    </div>
  );
}

export default BbibbiList;