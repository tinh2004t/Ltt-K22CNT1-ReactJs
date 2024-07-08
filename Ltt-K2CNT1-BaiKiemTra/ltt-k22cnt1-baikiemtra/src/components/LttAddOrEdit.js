import React, { useEffect, useState } from 'react'
import axios from '../api/LttApi';


export default function LttAddOrEdit(onLttClose, onLttSubmitForm, renderStudent) {
    console.log(renderStudent);
    const [lttMaSV, setLttMaSV] = useState(0);
    const [lttHoSV, setLttHoSV] = useState("");
    const [lttTenSV, setLttTenSV] = useState("");
    const [lttPhai, setLttPhai] = useState("");
    const [lttNgaySinh, setLttNgaySinh] = useState("");
    const [lttNoiSinh, setLttNoiSinh] = useState("");
    const [lttMaKH, setLttMaKH] = useState("");
    const [lttHocBong, setLttHocBong] = useState("");
    const [lttDiemTrungBinh, setLttDiemTrungBinh] = useState("");

    useEffect(() => {
        if (renderStudent) {
            setLttMaSV(renderStudent.MaSV);
            setLttHoSV(renderStudent.HoSV);
            setLttTenSV(renderStudent.TenSV);
            setLttPhai(renderStudent.Phai);
            setLttNgaySinh(renderStudent.NgaySinh);
            setLttNoiSinh(renderStudent.NgaySinh);
            setLttMaKH(renderStudent.NgaySinh);
            setLttHocBong(renderStudent.HocBong);
            setLttDiemTrungBinh(renderStudent.DiemTrungBinh);
        }
    }, [renderStudent]);
    const lttHandleClose = () => {
        onLttClose(false);
    }

    const lttHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(lttMaSV, lttHoSV, lttTenSV, lttPhai, lttNgaySinh, lttNoiSinh, lttMaKH, lttHocBong, lttDiemTrungBinh);
        let lttObjectStudent = {
            LttMaSV: lttMaSV,
            LttHoSV: lttHoSV,
            LttTenSV: lttTenSV,
            LttPhai: lttPhai,
            LttNgaySinh: lttNgaySinh,
            LttNoiSinh: lttNoiSinh,
            LttMaKH: lttMaKH,
            LttHocBong: lttHocBong,
            LttDiemTrungBinh: lttDiemTrungBinh
        }
        const lttRes = await axios.post("LttSinhVien", lttObjectStudent);
        onLttSubmitForm(false);
    }
    return (
        <div className='border'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="MaSV">MaSV</span>
                <input type="text" class="form-control"
                    name='MaSV' value={lttMaSV} onChange={(ev) => setLttMaSV(ev.target.value)}
                    placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="HoSV">HoSV</span>
                <input type="text" class="form-control"
                    name='HoSV' value={lttHoSV} onChange={(ev) => setLttHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="TenSV">TenSV</span>
                <input type="text" class="form-control"
                    name='TenSV' value={lttTenSV} onChange={(ev) => setLttTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Phai">Phai</span>
                <input type="text" class="form-control"
                    name='Phai' value={lttPhai} onChange={(ev) => setLttPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" class="form-control"
                    name='NoiSinh' value={lttNoiSinh} onChange={(ev) => setLttNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="MaKH">MaKH</span>
                <input type="text" class="form-control"
                    name='MaKH' value={lttMaKH} onChange={(ev) => setLttMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="HocBong">HocBong</span>
                <input type="text" class="form-control"
                    name='HocBong' value={lttHocBong} onChange={(ev) => setLttHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="text" class="form-control"
                    name='DiemTrungBinh' value={lttDiemTrungBinh} onChange={(ev) => setLttDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnLttSave' onClick={(ev) => lttHandleSubmit(ev)}>Ghi lai</button>
            <button className='btn btn-danger' onClick={lttHandleClose}>Dong</button>
        </div>
    )
}
