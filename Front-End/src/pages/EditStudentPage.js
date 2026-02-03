import React from 'react';
import Header from '../compoents/Header';
import EditStudent from "../compoents/EditStudent";
import { useParams } from 'react-router-dom';

const EditStudentPage = () => {
  const {id} =useParams();
  return (
    <React.Fragment>
        <Header  />
        <EditStudent  id={id} />
    </React.Fragment>
  )
}

export default EditStudentPage