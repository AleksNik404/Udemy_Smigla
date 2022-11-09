import React from 'react';

const List = ({ people }) => {
  return (
    <>
      <h2>list component</h2>
      {people.map(({ id, name, age, image }) => (
        <article key={id} className="person">
          <img src={image} alt="people" />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
