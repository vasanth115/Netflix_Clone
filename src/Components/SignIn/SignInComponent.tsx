// SignIn.tsx
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.scss';
import { useState } from 'react';
import useApiCall from '../../CustomeHooks/useApiCall';
import { useFormStore } from '../../Zustand/Store';


const SignInComponent = () => {

  const { setIslogin } = useFormStore();

  const Navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroritem, setError] = useState('');
  const { fetchUserData } = useApiCall('Subscribers');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const userobject = await fetchUserData(email);
      if (userobject) {

        if (userobject[0].password === password) {
          setError('');
          setIslogin(true)
          Navigate('/landing')
        } else {
          setError("Invalid password");
        }
      } else {
        setError("User not found");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className='signin'>
      <h1 className="signin__title">Sign In</h1>
      {erroritem && <div className="signin__error">{erroritem}</div>}

      <form onSubmit={handleSubmit} className="signin__form">
        <input type="email" className='form__input' placeholder='Email Address' value={email} onChange={handleEmailChange} />
        <input type="password" className='form__input' placeholder='Password' value={password} onChange={handlePasswordChange} />
        <button type="submit" className="sign__btn">Sign In</button>
      </form>
      <h2 className='signin__or'>or</h2>
      <button className='signin__code__btn'>Use Sign - In Code</button>
      <a className='form__forget'>Forget Password?</a>
      <div className="signin__remember">
        <input type="checkbox" name="" id="" />
        <p>Remember me</p>
      </div>
      <p className="signin__text">New to Netflix?  <Link to='/' className='form__Link'>Sign Up Now</Link></p>
      <p className="signin__info">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">learn More</a></p>
    </div>
  );
};

export default SignInComponent;
