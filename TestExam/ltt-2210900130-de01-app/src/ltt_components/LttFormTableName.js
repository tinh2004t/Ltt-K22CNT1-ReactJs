import axios from '../ltt_apis/ltt-2210900130';
import React, { useEffect, useState } from 'react'

export default function LttFormTableName({renderLttTableName, onLttEdit, onLttAdd}) {

    const [lttId, setLttId] = useState(renderLttTableName.lttId);
    const [lttTbName, setLttTbName] = useState(renderLttTableName.lttTbName);
    const [lttTbEmail, setLttTbEmail] = useState(renderLttTableName.lttTbEmail);
    const [lttTbPhone, setLttTbPhone] = useState(renderLttTableName.lttTbPhone);
    const [lttTbStatus, setLttTbStatus] = useState(renderLttTableName.lttTbStatus);

    useEffect(() => {

        setLttId(renderLttTableName.lttId);
        setLttTbName(renderLttTableName.lttTbName);
        setLttTbEmail(renderLttTableName.lttTbEmail);
        setLttTbPhone(renderLttTableName.lttTbPhone);
        setLttTbStatus(renderLttTableName.lttTbStatus);
    },[renderLttTableName])

    const [isAdding, setIsAdding] = useState(false);

    const lttHandleSubmit = async (lttEvent) => {
        lttEvent.preventDefault();
    
        const lttObjTableName = {
            "lttTbName": lttTbName,
            "lttTbEmail": lttTbEmail,
            "lttTbPhone": lttTbPhone,
            "lttTbStatus": lttTbStatus,
            "lttId": lttId
        }
        console.log(lttObjTableName);
    
        if (isAdding) {
            // Adding new data
            await axios.post("lttTableName", lttObjTableName);
            onLttAdd(lttObjTableName);
            setIsAdding(false);
        } else {
            // Editing existing data
            await axios.put("lttTableName/" + lttObjTableName.lttId, lttObjTableName);
            onLttEdit(lttObjTableName);
        }
    }

   

    const handleEditButton = (existingData) => {
        setIsAdding(false);
        // Populate form fields with existingData
    }
    const handleAddButton = () => {
        setLttId('');
        setLttTbName('');
        setLttTbEmail('');
        setLttTbPhone('');
        setLttTbStatus(true);
        // Set a flag to indicate we're adding a new record
        setIsAdding(true);
      };
      

    return (
        <div>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleAddButton}>
  Ltt Add
</button>

<h2>{isAdding ? 'Form xu ly du lieu Them Moi' : 'Form xu ly du lieu Edit'}</h2>

            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttId">lttId</span>
                    <input type="text" className="form-control"
                        placeholder="lttId"
                        value={lttId}
                        name='lttId'
                        onChange={(lttEv) => setLttId(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttId" />

                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttTbName">lttTbName</span>
                    <input type="text" className="form-control"
                        placeholder="lttTbName"
                        value={lttTbName}
                        name='lttTbName'
                        onChange={(lttEv) => setLttTbName(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttTbName" />

                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttTbEmail">lttTbEmail</span>
                    <input type="text" className="form-control"
                        placeholder="lttTbEmail"
                        value={lttTbEmail}
                        name='lttTbEmail'
                        onChange={(lttEv) => setLttTbEmail(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttTbEmail" />

                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttTbPhone">lttTbPhone</span>
                    <input type="text" className="form-control"
                        placeholder="0123123"
                        value={lttTbPhone}
                        name='lttTbPhone'
                        onChange={(lttEv) => setLttTbPhone(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttTbPhone" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttStatus">lttStatus</span>
                    <select id='lttTbStatus' className='form-control'
                        name='lttTbStatus'
                        value={lttTbStatus}
                        onChange={(lttEv) => setLttTbStatus(lttEv.target.value)}
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>

                    </select>
                    
                </div>

                <button type="submit" className="btn btn-primary my-3" name='btnLttSave' onClick={lttHandleSubmit}>Ltt Save</button>


            </form>

        </div>
    )
}
