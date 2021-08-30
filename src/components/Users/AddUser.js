import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Button from "../UI/Button";
const AddUser = ({ onAddUser }) => {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
  });

  const [error,setError] = useState('');

  const changeHandler = (event) => {
    // console.log("this is name",[event.target.name]);
    // console.log("this is value" , event.target.value);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  //  console.log(userData);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userData.username === undefined || userData === undefined) {
      return;
    } else {
      if (userData.username.trim().length === 0 || userData.age.length === 0) {
        setError({
            title: 'Invalid Input',
            message:'Please enter a valid name and age (non-emapty value).'
        })
        return;
      }
      if (+userData.age < 1) {
        setError({
            title: 'Invalid Age',
            message:'Please enter a valid age (>0).'
        })
        return;
      }
      onAddUser(userData);
      setUserData({});
      document.myForm.reset();
    }
  };

  const errorHandler = () =>{
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} name="myForm">
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={changeHandler}
            placeholder="enter username"
          />
          <label htmlFor="_age">Age (Years)</label>
          <input
            id="_age"
            type="number"
            name="age"
            onChange={changeHandler}
            placeholder="enter username"
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
