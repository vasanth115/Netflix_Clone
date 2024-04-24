import './LandingHeader.scss'
import logo from '../../../public/images/icons/logo.svg'
import { FaSearch } from "react-icons/fa";

const LandingHeader = () => {
  return (
    <div className='Landing__Header'>
       <div className="Landing__Header__image">
            <img src={logo} alt="" />
       </div>
    </div>
  )
}

export default LandingHeader
