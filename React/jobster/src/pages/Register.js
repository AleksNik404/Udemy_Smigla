import React from 'react';
import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {};
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
        {/* prettier-ignore */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
