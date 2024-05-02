// Sign Up page Footer Component step 1

import './Style.scss'

const SignUpFooter = () => {
  return (
    <div className='signin__footer'>
      <p className="signin__footer__text">Questions? Call <a>000-800-919-1694</a></p>
     <div className="signup__footer__row">
     <div className="footer__col">
        <a href="" className='signup__footer__link'>FAQ</a>
        <a href="" className='signup__footer__link'>Privacy</a>
        <select name="" id="">
          <option value="English">English</option>
          <option value="हिन्दी">हिन्दी</option>
        </select>
      </div>
      <div className="footer__col">
        <a href="" className='signup__footer__link'>Help Center</a>
        <a href="" className='signup__footer__link'>Cookie Preferences</a>
      </div>
      <div className="footer__col">
        <a href="" className='signup__footer__link'>Netflix Shop</a>
        <a href="" className='signup__footer__link'>Corporate Information</a>
      </div>
      <div className="footer__col">
        <a href="" className='signup__footer__link'>Terms of Use</a>
      </div>
     </div>
    </div>
  )
}

export default SignUpFooter
