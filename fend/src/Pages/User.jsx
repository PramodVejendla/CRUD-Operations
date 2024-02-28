import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="userContainer">
      <h1 className="bg-warning ">CRUD APP</h1>
      <Link to="/create" className="btn btn-success m-2">
        Add New User
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <Link to="/update" className="btn btn-success m-2">
                    Edit
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
