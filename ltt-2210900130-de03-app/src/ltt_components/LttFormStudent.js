import axios from '../ltt_apis/ltt-2210900130';
import React, { useEffect, useState } from 'react'

export default function LttFormStudent({ renderLttStudent, onLttEdit, onLttAdd }) {

    const [lttStudId, setLttStudId] = useState(renderLttStudent.lttStudId);
    const [lttStudName, setLttStudName] = useState(renderLttStudent.lttStudName);
    const [lttStudAge, setLttStudAge] = useState(renderLttStudent.lttStudAge);
    const [lttStudGender, setLttStudGender] = useState(renderLttStudent.lttStudGender);
    const [lttStudEmail, setLttStudEmail] = useState(renderLttStudent.lttStudEmail);
    const [lttStudPhone, setLttStudPhone] = useState(renderLttStudent.lttStudPhone);
    const [lttStudStatus, setLttStudStatus] = useState(renderLttStudent.lttStudStatus);

    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        setLttStudId(renderLttStudent.lttStudId);
        setLttStudName(renderLttStudent.lttStudName);
        setLttStudAge(renderLttStudent.lttStudAge);
        setLttStudGender(renderLttStudent.lttStudGender);
        setLttStudEmail(renderLttStudent.lttStudEmail);
        setLttStudPhone(renderLttStudent.lttStudPhone);
        setLttStudStatus(renderLttStudent.lttStudStatus);
        setIsAdding(false);
    }, [renderLttStudent])

    const lttHandleSubmit = async (lttEvent) => {
        lttEvent.preventDefault();

        const lttObjStudent = {
            "lttStudName": lttStudName,
            "lttStudAge": lttStudAge,
            "lttStudGender": lttStudGender,
            "lttStudEmail": lttStudEmail,
            "lttStudPhone": lttStudPhone,
            "lttStudStatus": lttStudStatus,
            "lttStudId": lttStudId
        }
        console.log(lttObjStudent);

        try {
            if (isAdding) {
                const lttRes = await axios.post("lttStudent", lttObjStudent);
                onLttAdd(lttRes.data);
            } else {
                const lttRes = await axios.put("lttStudent/" + lttStudId, lttObjStudent);
                onLttEdit(lttRes.data);
            }
        } catch (error) {
            window.alert("Vui Long Xem Lai Id va cac du lieu trong form");
        }
    }

    const handleEditButton = (existingData) => {
        setIsAdding(false);
        // Populate form fields with existingData   
    }
    const handleAddButton = () => {
        setLttStudId('');
        setLttStudName('');
        setLttStudAge('');
        setLttStudGender('');
        setLttStudEmail('');
        setLttStudPhone('');
        setLttStudStatus(true);
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
                    <span className="input-group-text" id="lttStudId">lttStudId</span>
                    <input type="text" className="form-control"
                        placeholder="lttStudId"
                        value={lttStudId}
                        name='lttStudd'
                        onChange={(lttEv) => setLttStudId(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttStudId" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttStudName">lttStudName</span>
                    <input type="text" className="form-control"
                        placeholder="lttStudName"
                        value={lttStudName}
                        name='lttStudName'
                        onChange={(lttEv) => setLttStudName(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttStudName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttStudAge">lttStudAge</span>
                    <input type="number" className="form-control"
                        placeholder="lttStudAge"
                        value={lttStudAge}
                        name='lttStudAge'
                        onChange={(lttEv) => setLttStudAge(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttStudAge" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttStudGender">lttStudGender</span>
                    <input type="text" className="form-control"
                        placeholder="lttStudGender"
                        value={lttStudGender}
                        name='lttStudGender'
                        onChange={(lttEv) => setLttStudGender(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttStudGender" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttStudEmail">lttStudEmail</span>
                    <input type="text" className="form-control"
                        placeholder="lttStudEmail"
                        value={lttStudEmail}
                        name='lttStudEmail'
                        onChange={(lttEv) => setLttStudEmail(lttEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lttStudEmail" />
                </div>
                
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lttStudatus">lttStudatus</span>
                    <select id='lttStudStatus' className='form-control'
                        name='lttStudStatus'
                        value={lttStudStatus}
                        onChange={(lttEv) => setLttStudStatus(lttEv.target.value)}
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
