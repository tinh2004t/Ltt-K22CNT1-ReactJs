import React from 'react'

export default function LttListTask({renderLttListTasks, removeItem, editItem}) {

    //render data

    let lttElementStudent = renderLttListTasks.map((student, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index +1}</td>
                    <td>{student.ltt_Id}</td>
                    <td>{student.ltt_Name}</td>
                    <td>{student.ltt_Age}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => editItem(student)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => removeItem(student.ltt_Id)}>Remove</button>
                    </td>
                </tr>

            </>
        )
    })
    
  return (
    <div>
        <h2>Danh sach sinh vien</h2>
        <table className='table table-bordered'>
            <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ma sinh vien</th>
                        <th>Student Name</th>
                        <th>Student Level</th>
                        <th>Action</th>
                    </tr>
            </thead>

            <tbody>
                {lttElementStudent}
            </tbody>
        </table>
    </div>
  )
}   