import React from 'react';
import { useState } from 'react';

const ErrorExample = () => {
  const [titleText, setTitleText] = useState('random title');

  const handlerClick = () => {
    setTitleText(titleText === 'HOW' ? 'random title' : 'HOW');
  };
  return (
    <div>
      <h2>{titleText}</h2>
      <button type="button" onClick={handlerClick}>
        Change Title
      </button>
    </div>
  );
};

export default ErrorExample;
