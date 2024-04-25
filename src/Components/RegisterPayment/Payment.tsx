import './payment.scss'
import logo from '../../../public/images/icons/logo.svg'
import { Link , useNavigate } from 'react-router-dom'
import Data from '../../JSON/payment.json'
import SignUpFooter from '../SignUpFooter/SignUpFooter'
import tick from '../../../public/images/icons/circle-tik.png'
import { useFormStore } from '../../Zustand/Store'

const Payment = () => {

  const { setIslogin } = useFormStore();

  const Navigate = useNavigate()

  const HandleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elements = document.querySelectorAll('.payment__select__item')
    elements.forEach((item) => item.classList.remove('active'))
    const selectedItem = e.currentTarget;
    selectedItem.classList.add('active')
  };
  
  const HandlePayment = () => {
    const elements = document.querySelectorAll('.active')
    if(elements.length > 0){
      // Navigate to Landing
      setIslogin(true)
      Navigate('/loading')
    }
    else{
      alert("Please Choose Your pack")
    }
  }

  
  return (
    <div className='payment'>
      <div className="payment__container">
        <Link to="/">
          <img src={logo} alt="" className="payment__image" />
        </Link>
        <Link to="/" className='payment__btn'>Sign Out</Link>
      </div>
      <div className="payment__text">
        <p>STEP 3 OF 3</p>
        <h1>Choose the plan that’s right for you</h1>
      </div>
      <div className="payment__select">
      {
        Data.map((item) => (
          <div className="payment__select__item" key={item.id} onClick={(e) =>HandleClick(e)}>
             <div className={`payment__title ${item.title}`}>
               <h3>{item.title}</h3>
               <h4>{item.quality}</h4>
               <div className="item__image">
               <img src={tick} alt="" />
               </div>
             </div>
             <div className="payment__details">
                <h2>Monthly price</h2>
                <h3> &#8377; {item.price}</h3>
             </div>
             <div className="payment__details">
              <h2>Video and sound quality</h2>
              <h3>{item['Video and sound quality']}</h3>
              </div>
              <div className="payment__details">
              <h2>Resolution</h2>
              <h3>{item.quality}</h3>
              </div>
              <div className="payment__details">
              <h2>Supported devices</h2>
              <h3>{item['Supported devices']}</h3>
              </div>
              <div className="payment__details">
              <h2>Devices your household can watch at the same time</h2>
              <h3>{item['household ']}</h3>
              </div>
              <div className="payment__details">
              <h2>Download devices</h2>
              <h3>{item['Download devices']}</h3>
              </div>
          </div>
        ))
      }
      </div>
      <p className='payment__paragraph'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="">Terms of Use</a> for more details. </p>
      <p className='payment__paragraph'> Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
      <div className="payment__nextbtn">
        <button onClick={HandlePayment}>Next</button>
      </div>
    <SignUpFooter  />
    </div>
  )
}

export default Payment
