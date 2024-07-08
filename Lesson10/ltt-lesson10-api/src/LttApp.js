import { useState, useEffect } from 'react';
import React from 'react';
import axios from './api/LttApi';
import LttListUsers from './components/LttListUsers';
import LttAddOrEdit from './components/LttAddOrEdit';

const LttApp = () => {
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

  const [lttAddOrEdit, setLttAddOrEdit] = useState(false);
  const lttInitUser = {
    UserName: "LeTuanTinh",
    Password: "24042004",
    Email: "tinh2426@gmail.com",
    Phone: "012301230123",
    id: "2210900130"
  }

  const [lttUser, setLttUser] = useState(lttInitUser);
  //Ham xu ly them moi
  const lttHandleAddNew = () => {
    setLttAddOrEdit(true);
  }

  const lttHandleClose = (param) => {
    setLttAddOrEdit(param);
  }
  const lttHandleSubmit = (param) => {
    lttGetAllUsers();
    setLttAddOrEdit(param);
  }
  const LttHandleDelete = () => {
    lttGetAllUsers();
  };
  let lttElementForm = lttAddOrEdit === true ? <LttAddOrEdit renderUser={lttUser} onLttClose={lttHandleClose}
    onLttSubmitForm={lttHandleSubmit} /> : "";

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <LttListUsers renderLttListUsers={lttListUsers} onLttDelete={LttHandleDelete} />
      <button className='btn btn-primary' onClick={lttHandleAddNew}>Them moi</button>
      <hr />
      {lttElementForm}
    </div>
  )
}

export default LttApp;
