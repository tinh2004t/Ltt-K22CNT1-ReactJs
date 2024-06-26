import React from 'react'

export default function LttListStuent({ renderLttListStudents, removeItem, editItem }) {

    //render data

    let lttElementStudent = renderLttListStudents.map((student, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.ltt_Id}</td>
                    <td>{student.ltt_Name}</td>
                    <td>{student.ltt_Age}</td>
                    <td>
                        <input
                            type="checkbox"
                            checked={student.lttIsActive}
                            readOnly
                        />
                    </td>
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
                        <th>Student Age</th>
                        <th>Hoạt động</th>
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