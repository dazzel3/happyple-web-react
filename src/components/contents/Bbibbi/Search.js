import React from 'react';

function Search({ code, onChange, onSearch }) {
  return (
    <div className="">
        <div className="">
            <input type="text" className=""
                name="code"
                placeholder="code"
                onChange={onChange}
                value={code}/>
            <button className="guestBook-btn" onChange={onChange} onClick={() => onSearch(code)}>검색하기</button>
        </div>  
    </div>
  );
}

export default Search;