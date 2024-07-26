import React from 'react'

export default function LttListStudent({renderLttListStudent, onLttDelete, onLttAdd, onLttEdit}) {
    console.log("App List:", renderLttListStudent);
    
    // Filter and display only active students
    const lttElementStudent = renderLttListStudent
        .filter(lttItem => lttItem.lttStudStatus === true || lttItem.lttStudStatus === "true")
        .map((lttItem, lttIndex) => {
            return (
                <tr key={lttIndex}>
                    <td>{lttItem.lttStudId}</td>
                    <td>{lttItem.lttStudName}</td>
                    <td>{lttItem.lttStudAge}</td>
                    <td>{lttItem.lttStudGender}</td>
                    <td>{lttItem.lttStudEmail}</td>
                    <td>Active</td>
                    <td>
                        <button className='btn btn-success m-2' onClick={() => lttHandleEdit(lttItem)}>Ltt-Edit</button>
                        <button className='btn btn-danger' onClick={() => lttHandleDelete(lttItem.lttStudId)}>Ltt-Remove</button>
                    </td>
                </tr>
            );
        })

    // Delete data
    const lttHandleDelete = async (lttStudId) => {
        if(window.confirm("Bạn có chắc muốn xóa dữ liệu có lttStudId = " + lttStudId)) {
            onLttDelete(lttStudId);
        }
    }

    // Edit
    const lttHandleEdit = (lttObjStudent) => {
        onLttEdit(lttObjStudent);
    }

    const lttHandleAdd = (lttObjStudent) => {
        onLttEdit(lttObjStudent);
    }

    return (
        <div>
            <h2>Danh sách thông tin sinh viên</h2>
            <hr/>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>lttStudId</th>
                        <th>lttName</th>
                        <th>lttAge</th>
                        <th>lttGender</th>
                        <th>lttEmail</th>
                        <th>lttStatus</th>
                        <th>ltt: Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lttElementStudent}
                </tbody>
            </table>
        </div>
    )
}
