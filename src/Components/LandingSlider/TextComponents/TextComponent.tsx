import './style.scss'
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


const TextComponent = ({title , rate}:TypeProps) => {
  return (
    <div className="text__container">
      <h1 className='text__title'>{title}</h1>
      <h4 className='text__ratings'>Ratings : {rate}</h4>
      <div className="buttons">
        <button className='button__play'> <FaPlay /> Play</button>
        <button className='button__plus'> <FaPlus /> My List</button>
      </div>
    </div>
  )
}

export default TextComponent


type TypeProps = {
    title : string
    rate : string
}