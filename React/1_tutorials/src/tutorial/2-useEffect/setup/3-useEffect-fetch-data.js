import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  async function getFetch() {
    const res = await fetch(url);
    const users = await res.json();
    console.log(users);
    setUsers(users);
  }

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map(({ id, login, avatar_url, html_url }) => (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
