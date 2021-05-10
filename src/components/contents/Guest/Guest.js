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
      username: 'behappy',
      password: '1234',
      content: '코로나 없던 시절이 그립네요..ㅠㅠ'
    },
    {
      id: 2,
      username: '꽃사슴',
      password: '5678',
      content: '내가 그린 그림을 무제한으로 저장할 수 있어서 좋은듯여~'
    },
    {
      id: 3,
      username: '쿠키',
      password: '1357',
      content: '추억 돋네여 ㅋㅋ 문방구 감성..'
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