import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
//import {loginasyncstart} from '.'
import { loginasyncstart } from '../store/reducers/user/user.action';
import { useDispatch } from 'react-redux';

function Login() {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  const submitevent = (e) => {
    e.preventDefault();
    dispatch(loginasyncstart(username, password, Navigate))
    //localStorage.setItem('user', username)
    //localStorage.setItem('password', password)
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name: </label>

            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}

            />
            <br />
          </div>
          <div className="form-group mt-3">
            <label>Password: </label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick= {submitevent} >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
  

export default Login;