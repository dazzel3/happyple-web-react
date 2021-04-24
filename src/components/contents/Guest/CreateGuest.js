import React from 'react';
import "../../../css/contents/GuestList.css"

function CreateGuest({ username, password, content, onChange, onCreate }) {
  return (
    <div className="guestBook-container">
        <div className="guestBook-section">
            <div className="guestBook-text">💬 Guest Book</div>
            <input type="text" className="guestBook-info"
                name="username"
                placeholder="name"
                onChange={onChange}
                value={username}/>
            <input type="password" className="guestBook-info"
                name="password"
                placeholder="password"
                onChange={onChange}
                value={password}/>
            <div> 
                <textarea className="guestBook-content"
                    name="content"
                    placeholder="내용을 입력하세요."
                    onChange={onChange}
                    value={content}/>
            </div> 
            <button className="guestBook-btn" onClick={onCreate}>등록하기</button>
        </div>  
    </div>
  );
}

export default CreateGuest;