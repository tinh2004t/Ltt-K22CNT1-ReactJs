import React, { useEffect, useState } from 'react'

export default function LttStudentAddOrEdit({lttOnSubmit, studentEdit, isEdit}) {
    // Doi tuong Student
    
    const [lttStudent, setLttStudent] = useState(studentEdit);
    
    useEffect(() => {
        setLttStudent(studentEdit);
    }, [studentEdit])
    //Ham xu ly su kien thay doi tren dieu khien

    const lttHandleChange = (lttEvent) => {
        let name = lttEvent.target.name;
        let value = lttEvent.target.value;
        
        setLttStudent(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const lttHandleSubmit = (lttEvent) => {
        lttEvent.preventDefault();
        lttOnSubmit(lttStudent);
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLttStudent(prevStudent => ({
          ...prevStudent,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
  return (
    <div>
        <h2>{isEdit ? 'Update task' : 'Them moi Sinh vien'}</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Ma sinh vien</span>
                <input name='ltt_Id' value={lttStudent.ltt_Id} onChange={lttHandleChange}/>
            </div>
            <div>
                <label>Student Name</label>
                <input name='ltt_Name' value={lttStudent.ltt_Name} onChange={lttHandleChange}/>
            </div>
            
            <div>
                <label>Student Age</label>
                <input name='ltt_Age' value={lttStudent.ltt_Age} onChange={lttHandleChange}/>
            </div>
            <div className="form-group mb-3">
            <label>Hoạt động:</label>
            <div className="form-check">
              <input
                type="checkbox"
                name='lttIsActive'
                checked={lttStudent.lttIsActive}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
            <button onClick={lttHandleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}