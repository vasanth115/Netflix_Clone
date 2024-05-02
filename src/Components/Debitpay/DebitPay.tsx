// Payment using Credit or Debit Card

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormStore } from "../../Zustand/Store"; // Assuming Zustand store for form data
import SignUpFooter from "../SignUpFooter/SignUpFooter";
import { useNavigate } from "react-router-dom";
import "./Debitpay.scss";
import logo from "../../../public/images/icons/logo.svg";
import visa from "../../../public/images/misc/visa_image.png";
import mastercard from "../../../public/images/misc/mastercard-image.jpg";

interface SubscriberData {
  email: string;
  password: string;
  cvv: string;
  cardNumber: string;
  expirationDate: string;
  nameOnCard: string;
}

const DebitPay: React.FC = () => {
  const navigate = useNavigate();
  const { pack, packagecard, email, password } = useFormStore();
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!cardNumber.trim()) {
      setError("Please enter your card number");
      return false;
    }
    if (!expirationDate) {
      setError("Please enter Expiration Date");
      return false;
    }
    if (!cvv) {
      setError("Please enter the CVV");
      return false;
    }
    if (!nameOnCard) {
      setError("Please enter the Name on Card");
      return false;
    }
    return true;
  };

  const handleStartSubscription = async () => {
    if (validateInputs()) {
      const subscriberData: SubscriberData = {
        email,
        password,
        cvv,
        cardNumber,
        expirationDate,
        nameOnCard,
      };

      try {
        const response = await fetch(`http://localhost:8000/Subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscriberData),
        });

        if (!response.ok) {
          throw new Error(
            "Failed to update subscriber information. Server responded with status " +
              response.status
          );
        }

        // const data = await response.json();
        // console.log('Subscriber information updated successfully:', data);
        navigate("/loading");
      } catch (error) {
        console.error("Error updating subscriber information:", error);
        setError("An error occurred. Please try again later."); // User-friendly error message
      }
    }
  };

  return (
    <div className="Debitpay">
      <div className="debitpay__header">
        <Link to="/">
          <img src={logo} alt="" className="debitpay__image" />
        </Link>
        <Link to="/" className="debitpay__signout">
          Sign Out
        </Link>
      </div>
      <div className="debitpay__content">
        <span className="debitpay__span">STEP 3 OF 3</span>
        <h1 className="debitpay__title">Set up your credit or debit card</h1>
        <div className="debitcard__image">
          <img src={visa} alt="" />
          <img src={mastercard} alt="" />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="debitpay__input">
          <input
            type="text"
            placeholder="Card Number"
            className="debitcard__input__number"
            maxLength={12}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="debitpay__date">
            <input
              type="text"
              placeholder="MM / YY"
              className="debitcard__input__date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              className="debitcard__input__cvv"
              value={cvv}
              maxLength={3}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Name on Card"
            className="debitcard__input__name"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>
        <div className="debitpay__package">
          <div className="debitpay__pac">
            <h4>{packagecard}</h4>
            <h4> &#8377; {pack}</h4>
          </div>
          <Link to="/payment" className="debitpay__change">
            Change
          </Link>
        </div>
        <p className="debitpay__paragraph">
          By checking the checkbox below, you agree to our Terms of Use, Privacy
          Statement, and that you are over 18. Netflix will automatically
          continue your membership and charge the membership fee (currently $
          {pack}/month) to your payment method until you cancel. You may cancel
          at any time to avoid future charges.
        </p>
        <button className="debitpay__button" onClick={handleStartSubscription}>
          Start Subscription
        </button>
      </div>
      <SignUpFooter />
    </div>
  );
};

export default DebitPay;
