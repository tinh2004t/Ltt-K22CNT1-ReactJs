import './App.css';
import { useState } from 'react';
import LttListStudent from './components/LttListStudent';
import LttStudentAddOrEdit from './components/LttStudentAddOrEdit';

function App() {
  const ltt_Student = [
    { ltt_Id:2210900119, ltt_Name:"Le Tuan Tinh", ltt_Age:23,lttIsActive:true },
    { ltt_Id:1, ltt_Name:"Nguyen Phuong Dung", ltt_Age:12,lttIsActive:true },
    { ltt_Id:2, ltt_Name:"Tinhneee",ltt_Age:22,lttIsActive:false},
    { ltt_Id:3, ltt_Name:"ZUMMZUMZMM",ltt_Age:20,lttIsActive:false},
    { ltt_Id:4, ltt_Name:"DUMDUMDUM",ltt_Age:19,lttIsActive:true},
   ];
   const lttStudentOpj = { 
    ltt_Id: 0,
    ltt_Name:"",
    ltt_Age:""
}
   // su dung hang useState de luu tru trang thai du lieu
   const [lttListStudent, setLttListStudent] = useState(ltt_Student);
   const [studentEdit, setStudentEdit] = useState(lttStudentOpj);
   const [isEdit, setIsEdit] = useState(false);

   const lttHandleSubmit = (lttParam) => {
      console.log("App:", lttParam);
     
      if(isEdit){
        const updatedData = lttListStudent.map((element) => {
          if (element.ltt_Id === lttParam.ltt_Id) {
            return { ltt_Id: lttParam.ltt_Id,ltt_Name:lttParam.ltt_Name , ltt_Age: lttParam.ltt_Age }; // Update the element with the new name
          }
          return element; // Return the original element for other IDs
        });
        setLttListStudent(updatedData);
        setIsEdit(false);
        setStudentEdit(lttStudentOpj)
      } else {
        setLttListStudent(prev => {
          return[
            ...prev,
            lttParam
          ]
        })
      }
   }
   const removeItem = (id) => {
    console.log("id:", id);

    const updatedData = lttListStudent.filter((element) => element.ltt_Id !== id);
    setLttListStudent(updatedData)
   }
   const editItem = (student) => {
    console.log("student:", student);
    setStudentEdit(student)
    setIsEdit(true)
   }
  return (
    <div className="container border">
      <h1>Le Tuan Tinh - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sach list Student*/}
        <LttListStudent renderLttListStudents = {lttListStudent} removeItem={removeItem} editItem={editItem}/>
      </div>
      <div>
        <LttStudentAddOrEdit lttOnSubmit={lttHandleSubmit} studentEdit={studentEdit} isEdit={isEdit}/>
      </div>
    </div>
    
  );
}

export default App;