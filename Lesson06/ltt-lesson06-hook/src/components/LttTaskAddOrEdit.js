import React, { useEffect, useState } from 'react'

export default function LttTaskAddOrEdit({ lttOnSubmit, renderLttTask, renderLttAddOrEdit }) {
    console.log("LttTaskAddOrEdit:", renderLttTask, renderLttAddOrEdit);
    // Doi tuong Task

    const lttTaskObj = {
        ltt_taskId: 4,
        ltt_taskName: "",
        ltt_level: ""
    }
    // const [lttTask, setLttTask] = useState(lttTaskObj);

    const [lttTask, setLttTask] = useState(renderLttTask);
    useEffect(() => {
        setLttTask(renderLttTask);
    }, [renderLttTask])
    console.log("State:", lttTask);


    //Ham xu ly su kien thay doi tren dieu khien

    const lttHandleChange = (lttEvent) => {
        let name = lttEvent.target.name;
        let value = lttEvent.target.value;

        setLttTask(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const lttHandleSubmit = (lttEvent) => {
        lttEvent.preventDefault();
        lttOnSubmit(lttTask);
    }

    const lttTitle = renderLttAddOrEdit === false ? "Them moi task:" : "Sua task";
    return (
        <div>
            <h2>{lttTitle}</h2>
            <form>
                <div>
                    <span className='input-group-text' id='basic-addon1'>Task ID</span>
                    <input name='ltt_taskId' value={lttTask.ltt_taskId} onChange={lttHandleChange}
                        className='form-control' placeholder='ID' airia-describedby='basic-addon1'
                    />
                </div>
                <div>
                    <span className='input-group-text' id='basic-addon2'>Task Name</span>
                    <input name='ltt_taskName' value={lttTask.ltt_taskName} onChange={lttHandleChange}
                        className='form-control' placeholder='Name' airia-describedby='basic-addon2'
                    />
                </div>
                <div>
                    <span className='input-group-text' id='basic-addon3'>Task Level</span>
                    <select name='ltt_level' value={lttTask.ltt_level} onChange={lttHandleChange}>
                        <option value={'Small'}>Small</option>
                        <option value={'Medium'}>Medium</option>
                        <option value={'High'}>High</option>
                    </select>
                </div>
                <button className='btn btnn-primary' onClick={lttHandleSubmit}>Ghi lai</button>
            </form>
        </div>
    )
}