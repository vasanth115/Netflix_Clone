// Header of the Landing Page

import React, { useEffect, useRef } from 'react';
import './LandingHeader.scss';
import logo from '../../../public/images/icons/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useFormStore, initialdata } from '../../Zustand/Store';
import { IoSearchSharp } from 'react-icons/io5';

const LandingHeader: React.FC<TypeProps> = ({ show , focus}: TypeProps) => {
  const {
    setIslogin,
    setEmail,
    setName,
    setPassword,
    setDataset,
    setSerieslist,
    setEpisode,
    setSearchTerm,
    searchTerm,
  } = useFormStore();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null); 

  useEffect(() => {

    if (focus && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [focus]);

  const HandleSignout = () => {
    setIslogin(false);
    setEmail('');
    setName('');
    setPassword('');
    setDataset(initialdata);
    setSerieslist([]);
    setEpisode({ episodeName: '', plot: '', vedio: '' });
    navigate('/');
  };

  return (
    <div className="Landing__Header">
      <div className="Landing__Header__image">
        <img src={logo} alt="" />
      </div>
      {show && (
        <div className="search__bar">
          <IoSearchSharp className="search__icon" />
          <input
            type="text"
            placeholder="Search Here . . ."
            className="search__bar__input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => navigate('/search')}
            ref={searchInputRef} 
          />
        </div>
      )}
      <div className="signout">
        <button className="signout__btn" onClick={HandleSignout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;

type TypeProps = {
  show: boolean;
  focus : boolean
};
