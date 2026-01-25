import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentApiCall, getAllStudentListApiCall } from '../redux/StudentSlice';
import { useNavigate } from 'react-router-dom';


const StudentInfo = () => {

    const {studentList,studentStatus,studentErrorMsg} = useSelector((state)=>state.StudentData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
        if(studentStatus === false)
        {
            dispatch(getAllStudentListApiCall())
        }
    },[studentList,dispatch]);

    const editStudent = (id)=>{
    
        navigate(`/edit/${id}`);

    }

  return (
    <React.Fragment>
        <div className='ms-5'>
            <h2 className='text-center mt-4'> Student list : {studentList.length} </h2>

            {
                studentList.length > 0 ?
                    <table className='table table-bordered table-hover ms-4  my-5' style={{width:"95%"}}>
                    <thead>
                        <tr className='table-success'>
                            <th>SID</th>
                            <th>SNAME</th>
                            <th>SFEE</th>
                            <th>SCOURSE</th>
                            <th>SADDRESS</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((item,index)=>
                                <tr key={index}>
                                    <td>{item.sid}</td>
                                    <td>{item.sname}</td>
                                    <td>{item.sfee}</td>
                                    <td>{item.scourse}</td>
                                    <td>{item.saddress}</td>
                                    <td> <button className='btn btn-warning' onClick={()=>editStudent(item.sid)}  > EDIT </button> </td>
                                    <td> <button className='btn btn-danger' onClick={()=>dispatch(deleteStudentApiCall(item.sid))}  > DELETE </button> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            :
                <h4> No Students Found . </h4>
            }
        </div>
    </React.Fragment>
  )
}

export default StudentInfo