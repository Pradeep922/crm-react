import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { logout } from '../store/reducers/user/user.action';
import { useDispatch } from 'react-redux';

const Nav = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <>
    <div className="nav">
    {/* <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
     */}
    <div className="controls-container">
      <div className="icon" onClick={() => navigate('/ticket')}> Ticket </div>
      <div className="icon" onClick={() => navigate('/dashboard')}> Dashboard </div>  
      <div className="icon" onClick={() => dispatch(logout())}> Logout </div>
    
    </div> 
    </div>
    </>
    
  )
}

export default Nav