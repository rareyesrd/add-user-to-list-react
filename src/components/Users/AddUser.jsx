import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModals from "../Modals/ErrorModals";

const AddUser = (props) => {
  const [errorOcurred, setErrorOcurred] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addNewUser = (event) => {
    event.preventDefault();
    const newUser = {
      username: enteredUsername,
      age: +enteredAge,
      id: Math.random().toString(),
    };

    if (enteredAge < 0) {
      setErrorMessage("Please enter a valid age (>0)");
      setErrorOcurred(true);
    } else if (enteredUsername && enteredAge) {
      props.onSaveUser(newUser);
      setErrorOcurred(false);
      resetForm();
    } else {
      setErrorMessage("Please enter a valid name and age (non-empty values)");
      setErrorOcurred(true);
    }
  };

  const resetForm = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };
  const closeModal = (value) => {
    setErrorOcurred(value);
  };

  let errorModal = "";
  if (errorOcurred) {
    errorModal = (
      <ErrorModals
        errorMessage={errorMessage}
        onCloseModal={closeModal}
      ></ErrorModals>
    );
  }

  return (
    <div>
      <form onSubmit={addNewUser}>
        <div className={styles.input}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </div>
      </form>
      {errorModal}
    </div>
  );
};

export default AddUser;
