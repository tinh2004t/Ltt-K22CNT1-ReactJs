import React from 'react'

export default function LttListTableName({renderLttListTableName, onLttDelete,onLttAdd, onLttEdit}) {
    console.log("App List:",renderLttListTableName);
    //Hienthi du lieu
    const lttElementTableName = renderLttListTableName.map((lttItem, lttIndex) => {
        return (
            
            <tr key={lttIndex}>
            <td>
                {lttItem.lttId}
            </td>
            <td>
                {lttItem.lttTbName}
            </td>
            <td>
                {lttItem.lttTbEmail}
            </td>
            <td>
                {lttItem.lttTbPhone}
            </td>
            <td>
                {(lttItem.lttTbStatus===true || lttItem.lttTbStatus==="true")?"Active":"Non-Active"}
            </td>
            <td>
                <button className='btn btn-success m-2'
                    onClick={()=>lttHandleEdit(lttItem)}
                >Edit</button>
                <button className='btn btn-danger'
                   onClick={()=>lttHandleDelete(lttItem.lttId)} 
                >Remove</button>
            </td>
            
        </tr>
        
        );
    })

    //Xoa du lieu
    const lttHandleDelete = async (lttId) => {
        if(window.confirm("Bạn có chắc muốn xóa dữ liệu có lttId =" + lttId)) {
          
            onLttDelete(lttId);
        }
        
        
    }

    //Edit
    const lttHandleEdit = (lttObjTableName) => {
        onLttEdit(lttObjTableName);
        
    }
    const lttHandleAdd = (lttObjTableName) => {
        onLttEdit(lttObjTableName);
    }


  return (
    <div>
        <h2>Danh sach thong tin .......</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <td>lttId</td>
                <td>lttTbName</td>
                <td>lttTbEmail</td>
                <td>lttTbPhone</td>
                <td>lttTbStatus</td>
                <td>ltt: Chuc nang</td>
            </thead>
            <tbody>
                {lttElementTableName}

            </tbody>
        </table>

    </div>
  )
}
