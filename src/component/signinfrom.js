
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SignForm = (props) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const [formError, setFormError] = useState({
    email: false,
    password: false
  });

  const [accountList, setAccountList] = useState([]);

  const EventHandler = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log('button Click');

    setFormError({
      email: inputValue.email === '',
      password: inputValue.password === ''
    });

    setAccountList([...accountList, inputValue]);
  };

  return (
    <>
      <form>
        <div>
          <label>Enter Email</label>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={inputValue.email}
            name="email"
            onChange={EventHandler}
          />
        </div>
        <div>
          <label>Enter password</label>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={inputValue.password}
            name="password"
            onChange={EventHandler}
          />
        </div>
        <div>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
      <div>{
       accountList?.map((value,index) => {
        return(
          <div key={index}>
          <h3>{value.email}</h3>
          <h3>{value.password}</h3>
          </div>
        );
        
       })
}
</div>
    </>
  );
};

export default SignForm;