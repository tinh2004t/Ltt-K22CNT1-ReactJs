import React, { useState } from 'react'

export default function LttTaskAddOrEdit({lttOnSubmit}) {
    // Doi tuong Task
    
    const lttTaskObj = { 
        ltt_taskId:4,
        ltt_taskName:"",
        ltt_level:""
    }
    const [lttTask, setLttTask] = useState(lttTaskObj);

    //Ham xu ly su kien thay doi tren dieu khien

    const lttHandleChange = (lttEvent) => {
        let name = lttEvent.target.name;
        let value = lttEvent.target.value;
        
        setLttTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const lttHandleSubmit = (lttEvent) => {
        lttEvent.preventDefault();
        lttOnSubmit(lttTask);
    }
  return (
    <div>
        <h2>Them moi Task</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Task ID</span>
                <input name='ltt_taskId' value={lttTask.ltt_taskId} onChange={lttHandleChange}/>
            </div>
            <div>
                <label>Task Name</label>
                <input name='ltt_taskName' value={lttTask.ltt_taskName} onChange={lttHandleChange}/>
            </div>
            <div>
                <label>Task Level</label>
                <select name='ltt_level' value={lttTask.ltt_level} onChange={lttHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={lttHandleSubmit}>Ghi lai</button>
        </form>
    </div>
  )
}
