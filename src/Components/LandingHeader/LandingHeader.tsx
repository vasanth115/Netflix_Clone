import './LandingHeader.scss'
import logo from '../../../public/images/icons/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useFormStore ,initialdata  } from '../../Zustand/Store'

  

const LandingHeader = () => {

  const { setIslogin, setEmail, setName, setPassword, setDataset, setSerieslist, setEpisode } = useFormStore();
  const navigate = useNavigate()

  const HandleSignout = () => {
    setIslogin(false);
    setEmail('');
    setName('');
    setPassword('');
    setDataset(initialdata);
    setSerieslist([]);
    setEpisode({ episodeName: '', plot: '', vedio: '' });
    navigate('/')
  }


  return (
    <div className='Landing__Header'>
       <div className="Landing__Header__image">
            <img src={logo} alt="" />
       </div>
       <div className="signout">
        <button className='signout__btn' onClick={HandleSignout}>Sign Out</button>
       </div>
    </div>
  )
}

export default LandingHeader
