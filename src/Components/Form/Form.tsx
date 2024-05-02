// Form of the Home Page

import React from 'react';
import './Form.scss';
import arrow from '../../../public/images/icons/chevron-right.png';
import { useNavigate } from 'react-router-dom';
import { useFormStore } from '../../Zustand/Store';

const Form: React.FC = () => {
  const { email, setEmail } = useFormStore();
  const Navigate = useNavigate();

  const HandleValidation = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    isValid ? Navigate('/register') : alert('Invalid Email Address');
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className='Form'>
      <p className='Form__text'>Ready to Watch? Enter your email to create or restart membership</p>
      <div className="Form__wrapper">
        <input type="text" className='Form__input' placeholder='Email Address' value={email} onChange={HandleChange} />
        <button className='Form__button' onClick={HandleValidation} >
          Get Started
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Form;
