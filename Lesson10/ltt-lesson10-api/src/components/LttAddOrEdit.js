import React, { useEffect, useState } from 'react'
import axios from '../api/LttApi';


export default function LttAddOrEdit(onLttClose, onLttSubmitForm, renderUsers) {
    console.log(renderUsers);
    const [lttId, setLttId] = useState(0);
    const [lttUserName, setLttUserName] = useState("");
    const [lttPassword, setLttPassword] = useState("");
    const [lttEmail, setLttEmail] = useState("");
    const [lttPhone, setLttPhone] = useState("");

    useEffect(() => {
        if (renderUsers) {
            setLttId(renderUsers.id);
            setLttUserName(renderUsers.UserName);
            setLttPassword(renderUsers.Password);
            setLttEmail(renderUsers.Email);
            setLttPhone(renderUsers.Phone);
        }
    }, [renderUsers]);
    const lttHandleClose = () => {
        onLttClose(false);
    }

    const lttHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(lttId, lttUserName, lttPassword, lttEmail, lttPhone);
        let lttObjectUser = {
            id: lttId,
            UserName: lttUserName,
            Password: lttPassword,
            Email: lttEmail,
            Phone: lttPhone
        }
        const lttRes = await axios.post("lttUsers", lttObjectUser);
        onLttSubmitForm(false);
    }
    return (
        <div className='border'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="id">ID</span>
                <input type="text" class="form-control"
                    name='id' value={lttId} onChange={(ev) => setLttId(ev.target.value)}
                    placeholder="id" aria-label="id" aria-describedby="id" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="UserName">UserName</span>
                <input type="text" class="form-control"
                    name='UserName' value={lttUserName} onChange={(ev) => setLttUserName(ev.target.value)}
                    placeholder="UserName" aria-label="UserName" aria-describedby="UserName" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="Password">Password</span>
                <input type="password" class="form-control"
                    name='Password' value={setLttPassword} onChange={(ev) => setLttPassword(ev.target.value)}
                    placeholder="Password" aria-label="Password" aria-describedby="Password" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Email">Email</span>
                <input type="email" class="form-control"
                    name='Email' value={lttEmail} onChange={(ev) => setLttEmail(ev.target.value)}
                    placeholder="Email" aria-label="Email" aria-describedby="Email" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Phone">Phone</span>
                <input type="number" class="form-control"
                    name='Phone' value={lttPhone} onChange={(ev) => setLttPhone(ev.target.value)}
                    placeholder="Phone" aria-label="Phone" aria-describedby="Phone" />
            </div>
            <button className='btn btn-primary' name='btnLttSave' onClick={(ev) => lttHandleSubmit(ev)}>Ghi lai</button>
            <button className='btn btn-danger' onClick={lttHandleClose}>Dong</button>
        </div>
    )
}
