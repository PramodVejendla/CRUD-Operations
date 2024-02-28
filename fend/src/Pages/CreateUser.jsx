import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        name,
        email,
        age,
      })
      .then((result) => {
        console.log(result), navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <form className="d-flex" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="User Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="User Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="User Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
}

export default CreateUser;
