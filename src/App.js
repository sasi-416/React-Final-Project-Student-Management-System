import './css/App.css';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AllStudentListPage from './pages/AllStudentListPage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route  path='*' element={< AllStudentListPage />} />
          <Route  path='/get' element={< AllStudentListPage />} />
          <Route  path='/Add' element={< AddStudentPage />} />
          <Route  path='/edit/:id' element={< EditStudentPage /> } />
        </Routes>
      </BrowserRouter> 
    </React.Fragment>
  );
}

export default App;
