import './BackBtn.scss'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate = useNavigate()

    const HandleBack = () => {
        navigate(-1);
    }

  return (
    <div className='Back__btn' onClick={HandleBack}>
           <IoArrowBack className='Back__arraow'/>
    </div>
  )
}

export default BackButton
