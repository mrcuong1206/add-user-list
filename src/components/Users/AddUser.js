import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 6) {
      return;
    }

    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const useNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={useNameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
