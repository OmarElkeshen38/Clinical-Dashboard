import React from 'react'
import logo from '../../assets/logoWelcome.svg'
import  './Welcome.css';
import Login from '../../components/Login/Login';

function Welcome() {
  
  return (
    <div style={{height:"100vh"}}>
       <div className='row m-0 h-100'>
          <div className='col d-none d-md-block p-0'>
             <div className='d-flex justify-content-center align-items-center h-100 welcome-back'>
                 <img src={logo} alt={logo} />
                 <h1 className='logo'>PillMate</h1>
             </div>
          </div>
          <div className='col-md-6' style={{background:"#fff"}}>
            <Login/>
          </div>
       </div>
    </div>
  );
}

export default Welcome;