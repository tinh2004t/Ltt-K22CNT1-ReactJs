import { useState, useEffect } from 'react';
import React from 'react';
import axios from './api/LttApi';
import LttListStudent from './components/LttListStudent';
import LttAddOrEdit from './components/LttAddOrEdit';

const LttApp = () => {
  const [lttListStudent, setLttListStudent] = useState([]);
  const [lttStudentToEdit, setLttStudentToEdit] = useState(null);
  const lttHandleEdit = (student) => {
    setLttStudentToEdit(student);
    setLttAddOrEdit(true); // Open the form for editing
  };
  // doc du lieu tu api
  const lttGetAllStudent = async () => {
    try {
      const lttResponse = await axios.get("LttSinhVien");
      console.log("API Data:", lttResponse.data);
      setLttListStudent(lttResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    lttGetAllStudent();
    console.log("Day la State Data:", lttListStudent);
  }, []); // Empty dependency array to run the effect only once

  const [lttAddOrEdit, setLttAddOrEdit] = useState(false);
  const lttInitStudent = {
    LttHoSV: "Le",
    LttTenSV: "Tuan Tinh",
    LttPhai: true,
    LttNgaySinh: 24042004,
    LttNoiSinh: "Ha Noi",
    LttMaKH: "CNT",
    LttHocBong: "99999999999999",
    LttDiemTrungBinh: "10",
    LttMaSV: "2210900130"
  }

  const [lttStudent, setLttStudent] = useState(lttInitStudent);
  //Ham xu ly them moi
  const lttHandleAddNew = () => {
    setLttAddOrEdit(true);
  }

  const lttHandleClose = (param) => {
    setLttAddOrEdit(param);
  }
  const lttHandleSubmit = async (param) => {
    // Handle the submission logic here
    // For example, you can make an API call to update or create a new student
    console.log("Submitted data:", param);
  
    try {
      // Make an API call to update or create a new student
      await axios.post("LttSinhVien", param);
  
      // After handling the submission, fetch the updated data
      await lttGetAllStudent();
      setLttAddOrEdit(false); // Close the form after submission
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
  
  const LttHandleDelete = () => {
    lttGetAllStudent();
  };
  let lttElementForm = lttAddOrEdit === true ? (
    <LttAddOrEdit
      renderStudent={lttStudent}
      onLttClose={lttHandleClose}
      onLttSubmitForm={lttHandleSubmit}
      
    />
  ) : (
    ""
  );
  
  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <LttListStudent renderLttListStudent={lttListStudent} onLttDelete={LttHandleDelete} onLttEdit={lttHandleEdit} />
      <button className='btn btn-primary' onClick={lttHandleAddNew}>Them moi</button>
      <hr />
      {lttElementForm}
    </div>
  )
}

export default LttApp;
