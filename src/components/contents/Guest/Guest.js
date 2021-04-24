import React, { useRef, useState } from 'react';
import GuestList from './GuestList';
import CreateGuest from './CreateGuest';

function Guest() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    content: ''
  });
  const { username, password, content } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      password: '1232',
      content: '안녕'
    },
    {
      id: 2,
      username: 'tester',
      password: 'dfsdf1',
      content: '전시회'
    },
    {
      id: 3,
      username: 'liz',
      password: 'd440',
      content: '재밋다'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = (e) => {
    // e.preventDefault();
    const user = {
      id: nextId.current,
      username,
      password,
      content,
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      password: '',
      content: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
      setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <CreateGuest
        username={username}
        password={password}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <GuestList users={users} onRemove={onRemove}/>
    </>
  );
}

export default Guest;