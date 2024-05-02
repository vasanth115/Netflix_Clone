// Main Footer Component

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <p className='fotter__title'>Questions ? Contact Us.</p>
        <div className="fotter__break"></div>
        <div className="footer__row">
            <div className="footer__column">
                <a  className='footer__link'>FAQ</a>
                <a   className='footer__link'>Investor Relations</a>
                <a  className='footer__link'>Privacy</a>
                <a  className='footer__link'>Speed Test</a>
            </div>
            <div className="footer__column">
                <a  className='footer__link'>Help Center</a>
                <a  className='footer__link'>Jobs</a>
                <a  className='footer__link'>Cookie Prefrences</a>
                <a  className='footer__link'>Legal Notices</a>
            </div>
            <div className="footer__column">
                <a  className='footer__link'>Account</a>
                <a  className='footer__link'>Way to Watch</a>
                <a  className='footer__link'>Corporate Information</a>
                <a  className='footer__link'>Netflix Originals</a>
            </div>
            <div className="footer__column">
                <a  className='footer__link'>Media Center</a>
                <a  className='footer__link'>Terms of Use</a>
                <a  className='footer__link'>Contact Us</a>
            </div>
        </div>
        <div className="footer__break"></div>
        <select name="" id="" className='footer__select'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
        </select>
        <p className='footer__text'>Netflix India</p>
    </div>
  )
}

export default Footer
