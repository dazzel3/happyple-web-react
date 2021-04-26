import React, { useRef, useState } from 'react';
import BbibbiList from './BbibbiList';
import Search from './Search';

function Bbibbi() {
  const [inputs, setInputs] = useState({
    code: '',
    content: ''
  });
  const { code, content } = inputs;
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
        code: '1004',
        content: '천사'
      },
      {
        id: 2,
        code: '0404',
        content: '영원히 사랑해'
      },
      {
        id: 3,
        code: '11555',
        content: '이리로 와요'
      },
      {
          id: 4,
          code: '1414',
          content: '같이 밥먹자'
      },
      {
          id: 5,
          code: '175',
          content: '일찍와!'
      },
      {
          id: 6,
          code: '100003',
          content: '만세!'
      },
      {
          id: 7,
          code: '100',
          content: '돌아와..'
      },
      {
          id: 8,
          code: '20000',
          content: '난 이만..'
      },
      {
          id: 9,
          code: '11',
          content: '나란히 있고 싶어..'
      },
      {
          id: 10,
          code: '0000',
          content: '보고싶어'
      }
  ]);

  const nextId = useRef(4);
  const onCreate = (e) => {
    const user = {
      id: nextId.current,
      code,
      content,
    };
    setUsers([...users, user]);

    setInputs({
        code: '',
        content: '',
    });
    nextId.current += 1;
  };

  const onSearch = code => {
      setUsers(users.filter(user => user.code === code));
  }

  return (
    <>
      <Search
        users={users}
        code={code}
        content={content}
        onSearch={onSearch}
        onChange={onChange}
      />
      <BbibbiList users={users}/>
    </>
  );
}

export default Bbibbi;