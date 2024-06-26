// Forget Password Form nad its Functions

import './ForgetPassword.scss';
import { useState } from 'react';
import useApiCall from '../../CustomeHooks/useApiCall';
import { Link } from 'react-router-dom';



const ForgetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ success , setSuccess ] = useState('')
    const { fetchUserData } = useApiCall('Subscribers');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!password) {
            setError('Password is required');
            return;
        }

        if (!confirmPassword) {
            setError('Confirm Password is required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Password and Confirm Password must match');
            return;
        }

        try {
            setError('');
            const userObject = await fetchUserData(email);
            if (Array.isArray(userObject) && userObject.length > 0) {
                userObject[0].password = password;

                const response = await fetch(`http://localhost:8000/Subscribers/${userObject[0].id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userObject[0])
                });

                if (!response.ok) {
                    throw new Error('Failed to update password');
                }
                setError('')
                setSuccess('Password Changed');
            } else {
                setError('User does not exist');
            }
        } catch (error) {
            setError('Error occurred while updating password');
        }
    };

    return (
        <div className='forget__password'>
            <h1 className="password__title">Forget Password</h1>
            {error && <div className='password__error'>{error}</div>}
            {success && <div className='password__success'>{success}</div>}
            <form className='forget__password__form' onSubmit={handleSubmit}>
                <input type="email" className='password__form__input' placeholder='Email Address' value={email} onChange={handleEmailChange} />
                <input type="password" className='password__form__input' placeholder='Password' value={password} onChange={handlePasswordChange} />
                <input type="password" className='password__form__input' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                <button type="submit" className="password__btn">Change Password</button>
            </form>
            <p className='password__paragrapgh'>Did You Changed ? <Link to='/login' className='password__link'>Sign In</Link></p>
        </div>
    );
};

export default ForgetPasswordForm;
