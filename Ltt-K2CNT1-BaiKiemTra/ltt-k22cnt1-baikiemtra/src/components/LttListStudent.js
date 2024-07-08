import React from 'react'
import axios from '../api/LttApi';

export default function LttListStudent({ renderLttListStudent, onLttDelete  }) {
    console.log("LttListStudent:", renderLttListStudent);


    // Check if renderLttListUsers is an array
    if (!Array.isArray(renderLttListStudent)) {
        return <div>No data available</div>;
    }
    
    const lttHandleDelete = async (param) => {
        if(window.confirm("Ban co muon xoa khong?")){
            const lttRes = axios.delete("LttSinhVien/"+param.MaSV);
        }
        onLttDelete();
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
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger' onClick={lttHandleDelete}>Remove</button>
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
