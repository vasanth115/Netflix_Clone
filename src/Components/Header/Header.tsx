// Header Components of Home page , Login Page 
import React from 'react';
import logo from '../../../public/images/icons/logo.svg';
import Form from '../Form/Form';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header: React.FC<HeaderProps> = ({ show, children }) => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="" className="header__image" />
        </Link>
        {show && <Link to="/login" className='header__btn'>Sign In</Link>}
      </div>
      {show && (
        <div className="header__text">
          <h1 className='header__text__heading'>Unlimited movies, TV shows and more</h1>
          <h2 className="header__text__subtitle">Watch anywhere. Cancel anytime.</h2>
          <Form />
        </div>
      )}
      {children} 
    </div>
  );
};

export default Header;


interface HeaderProps {
  show: boolean;
  children?: React.ReactNode;
}