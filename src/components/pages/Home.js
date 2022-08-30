import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Charts from '../Chart';
import Round from '../PieGraph';



const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/users");
    setUser(result.data.reverse());
  };


  const deleteUser = async id => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
        <table class="table border shadow table-responsive-sm ">
          <thead class="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.Age}</td>

                <td className='d-flex'>
                  <Link class="btn btn-primary mx-1" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mx-1"
                    to={`/users/edit/${user.id}`}
                  > 
                    Edit 
                    
                  </Link>
                  <Link to=""
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>

              </tr>
            ))}
          </tbody>


        </table>


      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-md-6'>

            <Charts />

          </div>

          <div className='col-md-6'>

            <Round />

          </div>
        </div>

      </div>


    </div>
  );



};

export default Home;

