import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LttListTask from './components/LttListTask';
import LttTaskAddOrEdit from './components/LttTaskAddOrEdit';

function App() {
  const ltt_listTasks = [
    { ltt_taskId:2210900130,ltt_taskName:"Le Tuan Tinh", ltt_level:"Small" },
    { ltt_taskId:2210900130,ltt_taskName:"Học lập trình frontend", ltt_level:"Small" },
    { ltt_taskId:2, ltt_taskName:"Học lập trình reactjs",ltt_level:"Medium"},
    { ltt_taskId:3, ltt_taskName:"Lập trình với Frontend - Reactjs",ltt_level:"High"},
    { ltt_taskId:4, ltt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",ltt_level:"Small"},
   ];

   // su dung hang useState de luu tru trang thai du lieu
   const [lttListTask, setLttListTask] = useState(ltt_listTasks);

   const lttHandleSubmit = (lttParam) => {
      console.log("App:", lttParam);
      setLttListTask(prev => {
        return[
          ...prev,
          lttParam
        ]
      })
   }
  return (
    <div className="container border">
      <h1>Le Tuan Tinh - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sach list Task*/}
        <LttListTask renderLttListTasks = {lttListTask}/>
      </div>
      <div>
        <LttTaskAddOrEdit lttOnSubmit={lttHandleSubmit}/>
      </div>
    </div>
    
  );
}

export default App;
