import React, { useState } from 'react';
import eye from '../../assets/el_eye-close.svg'
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="d-flex flex-column justify-content-center  align-items-center h-custom-2 pt-4 h-100">
     <div className='d-flex justify-content-start w-75 '>
        <h1 className='mb-5 form-header'>welcome back!</h1>
     </div>
      <form onSubmit={handleLogin} className='w-75'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label mb-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control input-email"
            id="email"
            placeholder="you@example.com"
            name="email"  
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label mb-3">
            Password
          </label>
          <div className="input-group input-password">
            <input
              type={formData.showPassword ? 'text' : 'password'}
              className="form-control custom-input"
              id="password"
              placeholder="please enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div onClick={togglePasswordVisibility} className='p-0' >
              {formData.showPassword ? <img src={eye} alt='hide password' width={30}/> : <img src={eye} alt='show password' width={30}/> }
            </div>
          </div>
        </div>
        <div className="mb-3 text-end">
          <a href="/" className='link-forget'>Forgot Password?</a>
        </div>
        <button type="submit" className="w-100 mt-5 btn-login">Log in</button>
      </form>
    </div>
  );
};

export default Login;
