import React, { useState } from 'react';
import logo from '../../../public/images/icons/logo.svg';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import { useFormStore } from '../../Zustand/Store';
import { useNavigate } from 'react-router-dom';
import SignUpFooter from '../SignUpFooter/SignUpFooter';


const SignUpForm = () => {
  const { email, password, setPassword } = useFormStore();
  const [isValidPassword, setIsValidPassword] = useState(true);
  const Navigate = useNavigate()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValidPassword(true);
    const isValid = password.length >= 6;
    if(isValid && email){
      setIsValidPassword(isValid);
      Navigate('/step2')
    }
    else{
      alert("Must Fill the Password")
      setIsValidPassword(isValid);
    }

    const details = {
        email,
        password
    }

    try {
        const response = await fetch("http://localhost:8000/Subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className='register__form'>
      <div className="register__container">
        <Link to="/">
          <img src={logo} alt="" className="register__image" />
        </Link>
        <Link to="/login" className='register__btn'>Sign In</Link>
      </div>
      <div className="register__content">
        <form onSubmit={handleSubmit} className='form_register'>
          <h5 className='register__step'>STEP 1 OF 3</h5>
          <h1 className='register__title'> Welcome back !</h1>
          <h1 className='register__item'> Joining Netflix is easy .</h1>
          <p className="register__text">Enter your password and you'll be watching in no time.</p>
          <input type="email" className='register__input' placeholder='Email' value={email} readOnly />
          <input
            type="password"
            className={`register__input ${isValidPassword ? '' : 'register__input--invalid'}`}
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          {!isValidPassword && <p className="register__error">Password must be at least 6 characters long</p>}
          <a href="" className='register__forgetpassword'>Forgot your password?</a>
          <button type="submit" className='register__button'>Next</button>
        </form>
      </div>
      <SignUpFooter />
    </div>
  );
};

export default SignUpForm;
