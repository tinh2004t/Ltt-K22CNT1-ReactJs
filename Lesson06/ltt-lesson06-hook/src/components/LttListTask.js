import React, { useEffect, useState } from 'react'

export default function LttListTask({ renderLttListTasks, onLttEdit }) {
    console.log("List:",renderLttListTasks);

    const [lttList, setLttList] = useState(renderLttListTasks);
    useEffect(() => {
       setLttList(renderLttListTasks) 
    },[renderLttListTasks]);

    //Ham xu ly du lieu khi edit
    const lttHandleEdit = (param) => {
        console.log("Edit", param);
        //chuyen du lieu sua len app
        onLttEdit(param);

    }

    //render data

    let lttElementTask = lttList.map((task, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.ltt_taskId}</td>
                    <td>{task.ltt_taskName}</td>
                    <td>{task.ltt_level}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => lttHandleEdit(task)}>Edit</button>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>

            </>
        )
    })

    return (
        <div>
            <h2>Danh sach cac nhiem vu</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Level</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {lttElementTask}
                </tbody>
            </table>
        </div>
    )
}
