import  { useState } from 'react';
import './Debitpay.scss';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/icons/logo.svg';
import visa from '../../../public/images/misc/visa_image.png';
import mastercard from '../../../public/images/misc/mastercard-image.jpg';
import { useFormStore } from '../../Zustand/Store';
import SignUpFooter from '../SignUpFooter/SignUpFooter';
import { useNavigate } from 'react-router-dom';

const DebitPay = () => {
    const navigate = useNavigate()
  const { pack, packagecard } = useFormStore();
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    // Validate card number
    if (!cardNumber.trim()) {
      setError('Please enter your card number');
      return false;
    }
    else if(!expirationDate){
        setError('Please enter Expiration Date')
    }
    else if(!cvv){
        setError('please enter the CVV')
    }
    else if(!nameOnCard){
        setError('please Enter the Name ')
    }
    // Add more validation logic for expiration date, CVV, and name on card if needed

    return true;
  };

  const handleStartSubscription = () => {
    if (validateInputs()) {
        navigate('/loading')
    }
  };

  return (
    <div className='Debitpay'>
      <div className='debitpay__header'>
        <Link to='/'>
          <img src={logo} alt='' className='debitpay__image' />
        </Link>
        <Link to='/' className='debitpay__signout'>
          Sign Out
        </Link>
      </div>
      <div className='debitpay__content'>
        <span className='debitpay__span'>STEP 3 OF 3</span>
        <h1 className='debitpay__title'>Set up your credit or debit card</h1>
        <div className='debitcard__image'>
          <img src={visa} alt='' />
          <img src={mastercard} alt='' />
        </div>
        {/* Display error message if card number is invalid */}
        {error && <p className='error-message'>{error}</p>}
        <div className='debitpay__input'>
          <input
            type='text'
            placeholder='Card Number'
            className='depitcard__input__number'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className='debitpay__date'>
            <input
              type='text'
              placeholder='MM / YY'
              className='depitcard__input__date'
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
            <input
              type='text'
              placeholder='CVV'
              className='depitcard__input__cvv'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <input
            type='text'
            placeholder='Name on Card'
            className='depitcard__input__name'
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>
        <div className='debitpay__package'>
          <div className='debitpay__pac'>
            <h4>{packagecard}</h4>
            <h4>{pack}</h4>
          </div>
          <Link to='/payment' className='debitpay__change'>
            Change
          </Link>
        </div>
        <p className='debitpay__paragraph'>
          By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18.
          Netflix will automatically continue your membership and charge the membership fee (currently ${pack}/month)
          to your payment method until you cancel. You may cancel at any time to avoid future charges.
        </p>
        <button className='debitpay__button' onClick={handleStartSubscription}>
          Start Subscription
        </button>
      </div>
      <SignUpFooter />
    </div>
  );
};

export default DebitPay;
