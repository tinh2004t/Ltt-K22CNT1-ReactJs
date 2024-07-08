import React from 'react'
import axios from '../api/LttApi';

export default function LttListStudent({ renderLttListStudent, onLttDelete , onLttEdit }) {
    console.log("LttListStudent:", renderLttListStudent);
    const lttHandleEdit = (student) => {
        // Call a function passed from the parent component to handle the edit operation
        // You can pass the student object to the parent component
        onLttEdit(student);
      };

    // Check if renderLttListUsers is an array
    if (!Array.isArray(renderLttListStudent)) {
        return <div>No data available</div>;
    }
    
    const lttHandleDelete = async (param) => {
        if (window.confirm("Ban co muon xoa khong?")) {
                const lttRes = await axios.delete("LttSinhVien/" + param.LttMaSV);
                console.log("LttSinhVien/" + param.LttMaSV);
                // Optionally, you can update the list after successful deletion
                onLttDelete();
        }
    }
    // Render the list of users
    let lttElementStudent = renderLttListStudent.map((LttSinhVien, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{LttSinhVien.LttMaSV}</td>
                    <td>{LttSinhVien.LttHoSV}</td>
                    <td>{LttSinhVien.LttTenSV}</td>
                    <td>{LttSinhVien.LttPhai}</td>
                    <td>{LttSinhVien.LttNgaySinh}</td>
                    <td>{LttSinhVien.LttNoiSinh}</td>
                    <td>{LttSinhVien.LttMaKH}</td>
                    <td>{LttSinhVien.LttHocBong}</td>
                    <td>{LttSinhVien.LttDiemTrungBinh}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => lttHandleEdit(LttSinhVien)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>lttHandleDelete(LttSinhVien)}>Remove</button>
                    </td>
                </tr>
            </>
        )
    })

    

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <th>MaSV</th>
                        <th>HoSV</th>
                        <th>TenSV</th>
                        <th>LttPhai</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                        <th>Chuc Nang</th>
                    </thead>
                    <tbody>
                        {lttElementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
