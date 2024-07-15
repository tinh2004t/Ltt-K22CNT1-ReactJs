import React, { useEffect, useState } from 'react'
import LttListTableName from './ltt_components/LttListTableName'
import axios from './ltt_apis/ltt-2210900130'
import LttFormTableName from './ltt_components/LttFormTableName';

export default function LttApp() {
//Doc du lieu tu API
  const [lttListTableName, setLttListTableName] = useState([]);
  const lttGetTableName = async () => {
    let lttRes = await axios.get("lttTableName");
    setLttListTableName(lttRes.data);
    console.log("App data:", lttRes.data);
    setLttListTableName(lttRes.data);
  }

  useEffect(() => {
    lttGetTableName();
  }, []);


  //Ham Xoa
  const lttHandleDelete = async (lttId) => {
    let lttRes = await axios.delete("lttTableName/"+lttId);
    lttGetTableName();
  }

  const lttObjTableName = {
    "lttId": "2210900130",
    "lttTbName": "Le Tuan Tinh",
    "lttTbEmail": "tinh2426@gmail.com",
    "lttTbPhone": "0123123",
    "lttTbStatus": true
  }

  const [lttTableName, setLttTableName] = useState(lttObjTableName);

  const lttHandleAdd = ()=>
  {
    lttGetTableName();
  }


  const lttHandleEdit = (lttObjEditTableName) => {
    setLttTableName(lttObjEditTableName);
    lttGetTableName();
  }

  return (
    <div className='container border my-3'> 
      <h1>Bai danh gia het hoc phan - Le Tuan Tinh: 2210900130</h1>
      <hr/>
      <LttListTableName renderLttListTableName = {lttListTableName} onLttDelete={lttHandleDelete} onLttEdit={lttHandleEdit} onLttAdd={lttHandleAdd}/>
      <hr/>
      <LttFormTableName renderLttTableName = {lttTableName} onLttEdit={lttHandleEdit} onLttAdd={lttHandleAdd}/> 
      <hr/>
    </div>
  )
}
