import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStudentApiCall, getAllStudentListApiCall } from '../redux/StudentSlice';
import StudentInfo from './StudentInfo';
import {useNavigate} from "react-router-dom";

const AddStudent = () => {

    const [FormData,setFormData] = useState({sid:"",sname:"",sfee:"",scourse:"",saddress:""}); 

    const {studentList,studentStatus,studentErrorMsg} = useSelector((state)=>state.StudentData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const UpdateFormData = (event) => {
        setFormData({
            ...FormData,
            [event.target.name] : event.target.value
            })
    } 

    const HandleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(addStudentApiCall(FormData));
           
        await dispatch(getAllStudentListApiCall());

        setTimeout(()=> navigate("/get"), 3000);

        setFormData({sid:"", sname:"",sfee:"",scourse:"",saddress:""});

    }

  return (
    <React.Fragment>
            <form onSubmit={HandleSubmit}>
            <div className='container text-center mt-5 ms-5 row'>
                <h4 className='text-center'>  Add Student  </h4>
                    <div className='col-3'>
                        <input type='text' className='form-control mt-2' placeholder='Enter sname' name='sname' value={FormData.sname} onChange={UpdateFormData} />
                    </div>

                    <div className='col-3'>
                        <input type='text' className='form-control mt-2' placeholder='Enter sfee' name='sfee' value={FormData.sfee}  onChange={UpdateFormData} />
                    </div>

                    <div className='col-3'>
                        <input type='text' className='form-control mt-2' placeholder='Enter scourse' name='scourse' value={FormData.scourse} onChange={UpdateFormData} />
                    </div>

                    <div className='col-3'>
                        <input type='text' className='form-control mt-2' placeholder='Enter saddress' name='saddress' value={FormData.saddress}  onChange={UpdateFormData} />                        
                    </div>

                    <div>
                        <input type='submit' value="Add Student"  className={` mt-4 mb-4 btn btn-primary `} />
                    </div>


                </div>
            </form>

            {
               studentStatus === true ? <div> <StudentInfo />  </div> : null   
            }

            
        </React.Fragment>
  )
}

export default AddStudent;