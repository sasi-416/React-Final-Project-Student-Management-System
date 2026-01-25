import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { toast } from 'react-toastify';

// const url = "http://localhost:8080/react_axios_demo/api/student";


// For Getting Student Information to Back-end API
export const getAllStudentListApiCall = createAsyncThunk(
    "Students",
    
    async (id=null,{rejectWithValue})=>{

        try{
            const url = "http://localhost:8080/react_axios_demo/api/student";

            const response = await axios.get(url);

            toast.success("Student Data retrived Successfully .");

            return response.data;
        }
        catch(error){
            const message = error.response.message;
            toast.error(message);
            return rejectWithValue(message)
        }
    }
)

// To Delete Student by ID to Back-end Api

export const deleteStudentApiCall = createAsyncThunk(
    "student/deleteStudent",
    
    async (id,{rejectWithValue})=>{

        try{
            const url = `http://localhost:8080/react_axios_demo/api/student/${id}`;

            const response = await axios.delete(url);

            toast.success(`Student ${id} Deleted Successfully .`);

            return id;
        }
        catch(error){
            const message = error.response.message;
            toast.error(message);
            return rejectWithValue(message)
        }
    }
)

// For Adding Student Data to Back-end API
export const addStudentApiCall = createAsyncThunk(
    "Student/addStudent",
    
    async (studentData,{rejectWithValue})=>{

        try{
            const url = `http://localhost:8080/react_axios_demo/api/student`;

            const response = await axios.post(url,studentData);

            toast.success("Student Data Added Successfully .");

            return response.data;
        }
        catch(error){
            const message = error.response.message;
            toast.error(message);
            return rejectWithValue(message)
        }
    }
)

// For Update Student Data to Back-end API

export const UpdateStudentApiCall = createAsyncThunk(
    "Student/updateStudent",
    
    async (studentData,{rejectWithValue})=>{

        try{
            const url = `http://localhost:8080/react_axios_demo/api/student/${studentData.sid}`;

            const response = await axios.patch(url,studentData);

            toast.success(`${studentData.sid} Student Data Updated Successfully .`);

            return response.data;
        }
        catch(error){
            const message = error.response.message;
            toast.error(message);
            return rejectWithValue(message)
        }
    }
)


const initialState = {

    studentList :[],

    studentStatus : false,

    studentErrorMsg: ""
}

const StudentSlice = createSlice({
    name:"Students",

    initialState,

    reducers:{

    },

    extraReducers:(builder)=>{
        builder
                .addCase(getAllStudentListApiCall.fulfilled,(state,action)=>{
                    state.studentList = action.payload
                    state.studentStatus = true ;
                })
                .addCase(getAllStudentListApiCall.rejected,(state,action)=>{
                    state.studentStatus = false;
                    state.studentErrorMsg = action.payload;
                })
                .addCase(deleteStudentApiCall.fulfilled,(state,action)=>{
                    const remainingStudentList = state.studentList.filter((item,index)=>{
                        return item.sid != action.payload;
                    })
                    state.studentList = remainingStudentList;
                    state.studentStatus = true ;
                })
                .addCase(deleteStudentApiCall.rejected,(state,action)=>{
                    state.studentStatus = false;
                    state.studentErrorMsg = action.payload;
                })
                .addCase(addStudentApiCall.fulfilled,(state,action)=>{
                    state.studentList.push(action.payload);
                    state.studentStatus = true ;
                })
                .addCase(addStudentApiCall.rejected,(state,action)=>{
                    state.studentStatus = false;
                    state.studentErrorMsg = action.payload;
                })
                .addCase(UpdateStudentApiCall.fulfilled,(state,action)=>{
                    const updateStudent = state.studentList.map((item,index)=>{
                        if(item.sid === action.payload.sid){
                            return action.payload
                        }
                        return item
                    })
                    state.studentList = updateStudent ; 
                    state.studentStatus = true ;
                })
                .addCase(UpdateStudentApiCall.rejected,(state,action)=>{
                    state.studentStatus = false;
                    state.studentErrorMsg = action.payload;
                })
    }
})






// export const {} = StudentSlice.actions;

export default StudentSlice.reducer;