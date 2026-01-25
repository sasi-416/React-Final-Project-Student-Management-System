import React from 'react';
import "../css/Header.css";

const Header = () => {
  return (
    <React.Fragment>
        <div className='header'>
          <a href='/Get'>
            <div className='bgColor'>
              Get All Student
            </div>
          </a>

          <a href='/Add'>
            <div className='bgColor'>
              Add Student 
            </div>
          </a>
        </div>
    </React.Fragment>
  )
}

export default Header