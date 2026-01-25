import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import StudentReduer from "./StudentSlice";

const Store = configureStore({

    reducer:{
        
        StudentData : StudentReduer 
    }

})

export default Store;