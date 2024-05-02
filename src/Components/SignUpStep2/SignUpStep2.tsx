// Sign Up Process Step 2

import './Style.scss'
import logo from '../../../public/images/icons/logo.svg'
import { Link,useNavigate } from 'react-router-dom'
import tick from '../../../public/images/icons/tick.png'
import tik from '../../../public/images/icons/tik.png'
import SignUpFooter from '../SignUpFooter/SignUpFooter'

const SignUpStep2 = () => {

    const Navigate = useNavigate()
  return (
    <div className='step'>
      <div className="step__container">
        <Link to="/">
          <img src={logo} alt="" className="step__image" />
        </Link>
        <Link to="/" className='step__btn'>Sign Out</Link>
      </div>
      <div className="step__content">
            <img src={tick} alt="" className='step2__image' />
            <h5 className='step__step'>STEP 2 OF 3</h5>
            <h1 className='step2__title'>Choose your plan.</h1>
            <div className="step__row"><img src={tik} alt="" className='step__row__image' height='40px' width='40px'/><p className='step__para'>No commitments, cancel anytime.</p></div>
            <div className="step__row"><img src={tik} alt="" className='step__row__image' height='40px' width='40px'/><p className='step__para'>Everything on Netflix for one low price.</p></div>
            <div className="step__row"><img src={tik} alt="" className='step__row__image' height='40px' width='40px'/><p className='step__para'>No ads and no extra fees. Ever.</p></div>
            <button className='step__btn' onClick={() =>Navigate('/payment')}>Next</button>
      </div>
      <SignUpFooter />
    </div>
  )
}

export default SignUpStep2
