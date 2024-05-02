import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/images/icons/logo.svg";
import "./UPIpay.scss";
import SignUpFooter from "../SignUpFooter/SignUpFooter";
import { useFormStore } from "../../Zustand/Store";

const UPIPay: React.FC = () => {
  const { email, password } = useFormStore();
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [value, setValue] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(60); 
  const navigate = useNavigate();

  const handleClick = () => {
    if (!number) {
      setError("Fill the UPI ID");
    } else if (number.length !== 10) {
      setError("Provide a Correct UPI ID");
    } else {
      setValue(true);
    }
  };

  useEffect(() => {
    if (value && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [value, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      const subscriberData = {
        email,
        password,
        type: "UPI Pay",
        upinumber: number,
      };
      fetch(`http://localhost:8000/Subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update subscriber information.");
          }
          navigate("/loading");
        })
        .catch((error) => {
          console.error("Error updating subscriber information:", error);
          alert("An error occurred. Please try again later."); // Provide user-friendly error message
        });
    }
  }, [timeLeft, email, password, number]);

  return (
    <div className="upipay">
      <div className="upipay__header">
        <Link to="/">
          <img src={logo} alt="Logo" className="upipay__image" />
        </Link>
        <Link to="/" className="upipay__link">
          Sign Out
        </Link>
      </div>
      {!value ? (
        <div className="upipay__container">
          <span className="upipay__span">STEP 3 OF 3</span>
          <h1 className="upipay__title">Set up UPI AutoPay</h1>
          <p className="upipay__paragraph">
            You can change this recurring payment any time in your settings.
          </p>
          {error && <p className="error__message">{error}</p>}
          <div className="upipay__inputs">
            <select name="Select Your UPI App" id="" className="upipay__select">
              <option value="BHMI" className="upipay__option">
                BHMI
              </option>
              <option value="PhonePay" className="upipay__option">
                PhonePay
              </option>
              <option value="GPay" className="upipay__option">
                G-Pay
              </option>
              <option value="AmazonPay" className="upipay__option">
                Amazon Pay
              </option>
            </select>
            <input
              type="text"
              className="upipay__input"
              placeholder="UPI ID"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className="upipay__button" onClick={handleClick}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="upipay__timer">
          <p className="upipay__para">
            {" "}
            Request is Sent to your UPI ID Confirm Your Payment within the Time
          </p>
          <h1 className="upipay__timeleft">
            Time left: {Math.floor(timeLeft / 60)}:
            {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
          </h1>
        </div>
      )}
      <SignUpFooter />
    </div>
  );
};

export default UPIPay;
