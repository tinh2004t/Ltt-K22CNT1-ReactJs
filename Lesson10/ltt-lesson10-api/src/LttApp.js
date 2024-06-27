import { useState, useEffect } from 'react';
import React from 'react'
import axios from './api/LttApi'
import LttListUsers from './components/LttListUsers';

export default function LttApp() {
  const [lttListUsers, setLttListUsers] = useState([]);

  // doc du lieu tu api
  const lttGetAllUsers = async () => {
    const lttResponse = await axios.get("lttUsers");
    console.log("Api Data:", lttResponse.data);
    setLttListUsers(lttResponse.data);
  }

  useEffect(() => {
    lttGetAllUsers();
    console.log("Day la State Data:", lttListUsers);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <LttListUsers renderLttListUsers={lttListUsers} />
    </div>
  )
}
