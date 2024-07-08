import React from 'react'
import axios from '../api/LttApi';

export default function LttListUsers({ renderLttListUsers, onLttDelete  }) {
    console.log("LttListUsers:", renderLttListUsers);


    // Check if renderLttListUsers is an array
    if (!Array.isArray(renderLttListUsers)) {
        return <div>No data available</div>;
    }
    
    const lttHandleDelete = async (param) => {
        if(window.confirm("Ban co muon xoa khong?")){
            const lttRes = axios.delete("lttUsers/"+param.M);
        }
        onLttDelete();
    }
    // Render the list of users
    let lttElementUser = renderLttListUsers.map((lttUser, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{lttUser.id}</td>
                    <td>{lttUser.UserName}</td>
                    <td>{lttUser.Password}</td>
                    <td>{lttUser.Email}</td>
                    <td>{lttUser.Phone}</td>
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
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chuc Nang</th>
                    </thead>
                    <tbody>
                        {lttElementUser}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
