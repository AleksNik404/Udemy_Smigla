import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) console.log('empty values');
    else {
      setPeople((people) => [...people, { id: new Date().getTime(), name, email }]);
      console.log(people);

      setEmail('');
      setName('');
    }
  };

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" value={name} onChange={changeName} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={email} onChange={changeEmail} />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map(({ id, name, email }) => (
          <div key={id} className="item">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
