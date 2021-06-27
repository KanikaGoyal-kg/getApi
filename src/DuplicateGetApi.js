import React, { useEffect, useState } from 'react';

import axios from "axios";
import { Table } from "react-bootstrap";

const DuplicateGetApi = () => {
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState("");

useEffect(() => {
    axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => {
        setCountries(res.data.data)
        console.log(res, "asdf");
    })
    .catch((err) => {
        setError(err.message);
    });
});

const clickMeButton = () => {
  const data = { "userName": "Kanika Goyal",
  "Email": "goyalkanu111@gmail.com",
  "password": "123456789",
  "confirmPassword": "123456789",
  "contactNo": "6798765434"}

  const postData = axios.post('http://localhost:3000/signup/',data).then((res) => {
        console.log(res, "res");
  })
  
}



  return (
    <div>
      <div>
      <button onClick={clickMeButton}>Click me</button>
        {countries.map((item, id) => (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </div>
  );
};

export default DuplicateGetApi;