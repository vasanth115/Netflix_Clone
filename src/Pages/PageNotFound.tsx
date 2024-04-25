import { Link } from 'react-router-dom'
import image from '../../public/images/misc/pagenotfound.png'
import './pageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className='error__page'>
      <img src={image} alt="" height='400px' width="400px" />
        <h1>Oops , Page Not Found</h1>
        <Link to='/' className='link'>Redirect</Link>
    </div>
  )
}

export default PageNotFound
