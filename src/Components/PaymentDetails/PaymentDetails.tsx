import './paymentDetails.scss'
import { Link } from 'react-router-dom'
import lock from '../../../public/images/misc/lock-iamge.png'
import logo from '../../../public/images/icons/logo.svg'
import visa from '../../../public/images/misc/visa_image.png'
import mastercard from '../../../public/images/misc/mastercard-image.jpg'
import { FaAngleRight } from "react-icons/fa";
import phonepay from '../../../public/images/misc/phonepe-logo-icon.webp'
import gpay from '../../../public/images/misc/gpay-logo.png'  
import BHMIlogo from '../../../public/images/misc/BHIM_Preview.png'
import { useNavigate } from 'react-router-dom'
import SignUpFooter from '../SignUpFooter/SignUpFooter'


const PaymentDetails = () => {

    const navigate = useNavigate()

  return (
    <div className='payment__card'>
        <div className="payment__header">
            <Link to='/'>
            <img src={logo} alt="" className='payment__images'/>
            </Link>
            <Link to='/' className='payment__signout'>Sign Out</Link>
        </div>
        <div className="payment__container">
            <div className="image__lock">
                <img src={lock} alt="" />
            </div>
            <div className="paymentstatus__content">
                <span className='paymentstatus__span'>STEP 3 OF 3</span>
                <h1 className='paymentstatus__heading'>Choose how to pay</h1>
                <p className='paymentstatus__paragraph'>Your payment is encrypted and you can change your payment method at anytime.</p>
                <h4 className='paymentstatus__subheading'>Secure for peace of mind.</h4>
                <h4 className='paymentstatus__subtitle'>Cancel easily online.</h4>
            </div>
            <div className="payment__option">
                <div className="payment__select" onClick={()=> navigate('/debitpay')}>
                    <h3>Credit or Debit Card</h3>
                    <div className="paymentcard_logo">
                        <img src={visa} alt="" />
                        <img src={mastercard} alt="" />
                    </div>
                    <FaAngleRight className='right__arrow'/>
                </div>
                <div className="payment__select" onClick={()=> navigate('/upipay')}>
                    <h3>UPI  AutoPay</h3>
                    <div className="paymentcard_logo">
                        <img src={phonepay} alt="" />
                        <img src={gpay} alt="" />
                        <img src={BHMIlogo} alt="" />
                    </div>
                    <FaAngleRight className='right__arrow'/>
                </div>
            </div>
        </div>
        <SignUpFooter />
    </div>
  )
}

export default PaymentDetails