import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LttListTask from './components/LttListTask';
import LttTaskAddOrEdit from './components/LttTaskAddOrEdit';

function App() {
  const ltt_listTasks = [
    { ltt_taskId: 2210900130, ltt_taskName: "Le Tuan Tinh", ltt_level: "Small" },
    { ltt_taskId: 2210900130, ltt_taskName: "Học lập trình frontend", ltt_level: "Small" },
    { ltt_taskId: 2, ltt_taskName: "Học lập trình reactjs", ltt_level: "Medium" },
    { ltt_taskId: 3, ltt_taskName: "Lập trình với Frontend - Reactjs", ltt_level: "High" },
    { ltt_taskId: 4, ltt_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", ltt_level: "Small" },
  ];

  // su dung hang useState de luu tru trang thai du lieu
  const [lttListTask, setLttListTask] = useState(ltt_listTasks);



  //Ham xu ly don du lieu sua
  // luu tru state
  const task = { ltt_taskId: 2210900130, ltt_taskName: "NTU", ltt_level: "Small" }
  const [lttTask, setLttTask] = useState(task);//dung de render form

  // quan ly trang thai form khi them / sua
  const [lttAddOrEdit, setLttAddOrEdit] = useState(false); //Them  

  const lttHandleEdit = (param) => {
    setLttTask(param);
    setLttAddOrEdit(true);
  }



  const lttHandleSubmit = (lttParam) => {
    console.log("App:", lttParam);
    if (lttAddOrEdit === false) { //khi them moi
      setLttListTask(prev => {
        return [
          ...prev,
          lttParam
        ];
      });
    }else {//submit khi sua
      console.log("App Edit:", lttParam);
      for (let i = 0; i < lttListTask.length; i++) {
        if (lttListTask[i].ltt_taskId === lttParam.ltt_taskId) {
          console.log("lttListTask Edit:",i,lttListTask[i].ltt_taskId);
          lttListTask[i] = lttParam;
        }
        console.log(lttListTask);
        // setLttAddOrEdit(LttListTask);
        setLttListTasks((prev) => {
        return [...prev];
      });
      }
    
    }
    useEffect(() => {
      setLttListTask(lttListTask);
    },[lttListTask]);
  }
   
  return (
    <div className="container border">
      <h1>Le Tuan Tinh - K22CNT1</h1>
      <hr />
      <div>
        {/*Danh sach list Task*/}
        <LttListTask renderLttListTasks={lttListTask} onLttEdit={lttHandleEdit} />
      </div>
      <div>
        <LttTaskAddOrEdit lttOnSubmit={lttHandleSubmit}
          renderLttAddOrEdit={lttAddOrEdit}
          renderLttTask={lttTask} />
      </div>
    </div>

  );
}

export default App;
