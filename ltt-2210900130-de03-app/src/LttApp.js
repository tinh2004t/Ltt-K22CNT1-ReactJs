import React, { useEffect, useState } from 'react'
import LttListStudent from './ltt_components/LttListStudent'
import axios from './ltt_apis/ltt-2210900130'
import LttFormStudent from './ltt_components/LttFormStudent';

export default function LttApp() {
  const [lttListStudent, setLttListStudent] = useState([]);
  
  const lttGetStudent = async () => {
    let lttRes = await axios.get("lttStudent");
    setLttListStudent(lttRes.data);
    console.log("App data:", lttRes.data);
  }

  useEffect(() => {
    lttGetStudent();
  }, []);

  const lttHandleDelete = async (lttStudId) => {
    await axios.delete("lttStudent/"+lttStudId);
    lttGetStudent();
  }

  const lttObjStudent = {
    "lttStudId": "",
    "lttStudName": "",
    "lttStudAge": "",
    "lttStudGender": "",
    "lttStudEmail": "",
    "lttStudStatus": true
  }

  const [lttStudent, setLttStudent] = useState(lttObjStudent);

  const lttHandleAdd = () => {
    lttGetStudent();
  }

  const lttHandleEdit = (lttObjEditStudent) => {
    setLttStudent(lttObjEditStudent);
    lttGetStudent();
  }

  return (
    <div className='container border my-3'> 
      <h1>Bai danh gia het hoc phan - Le Tuan Tinh: 2210900130</h1>
      <hr/>
      <LttListStudent renderLttListStudent={lttListStudent} onLttDelete={lttHandleDelete} onLttEdit={lttHandleEdit} onLttAdd={lttHandleAdd}/>
      <hr/>
      <LttFormStudent renderLttStudent={lttStudent} onLttEdit={lttHandleEdit} onLttAdd={lttHandleAdd}/> 
      <hr/>
    </div>
  )
}
