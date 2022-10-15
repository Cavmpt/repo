import React from "react";
import { useEffect, useState } from "react";
import { RootState } from "../../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalContent,
  setShowModal,
} from "../../../Store/redux/slices/modalSlice";
// import UserPool from "../../../Helpers/AwsCognitoUserPool";

export interface ISignupStepProps {}

export default function SignupStep(props: ISignupStepProps) {
  const dispatch = useDispatch();
  const [signupCredentials, setSignupCrendentials] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    subscribeToNewsletter: "false",
  });
  const email = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    if (email.length < 0) {
      dispatch(setModalContent("oauth"));
    }
  }, [dispatch, email.length]);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setSignupCrendentials(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const {
    firstName,
    lastName,
    password,
    confirmPassword,
    subscribeToNewsletter,
  } = signupCredentials;

  const signup = () => {
    fetch("http://localhost:4000/auth/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstname: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword,
      }), // body data type must match "Content-Type" header
    }).then(response => {
      console.log("hit this spot 989898");
      console.log("response", response);
      if (response.status !== 200) {
        response.json().then(errorMessage => {
          // setLoginErrors({
          //   error: true,
          //   status: response.status,
          //   errorMessage: errorMessage,
          // });
          console.log("hit234234234");
          dispatch(setModalContent("signup-step"));
        });
      } else if (response.status === 200) {
        dispatch(setModalContent("confirm-phone-number"));
        response.json().then(() => {
          console.log("response", response);
        });
      }
    });
  };

  return (
    <div className="signup-modal">
      <div className="signup-modal__user-email">{email}</div>
      <div className="signup-modal__center-wrap">
        <div className="signup-modal__firstname-wrap">
          <h1 className="signup-modal__title">First Name</h1>
          <input
            value={firstName}
            className="signup-modal__firstname-input"
            name="firstName"
            onChange={e => onChange(e)}
            type="text"
          />
        </div>
        <div className="signup-modal__last-name-wrap">
          <h1 className="signup-modal__title">Last Name</h1>
          <input
            value={lastName}
            className="signup-modal__lastname-input"
            name="lastName"
            onChange={e => {
              onChange(e);
            }}
            type="text"
          />
        </div>
        <div className="signup-modal__password-wrap">
          <h1 className="signup-modal__title">Password</h1>
          <input
            value={password}
            className="signup-modal__password-input"
            name="password"
            onChange={e => {
              onChange(e);
            }}
            type="text"
          />
        </div>
        <div>
          <h1 className="signup-modal__title">Confirm Password</h1>
          <input
            value={confirmPassword}
            className="signup-modal__confirm-password-input"
            name="confirmPassword"
            onChange={e => {
              onChange(e);
            }}
            type="text"
          />
        </div>
        <div className="signup-modal__newsletter-wrap">
          <p>Subscribe to News from wholesaleindustrial</p>
          {/* <input
            onChange={e => {
              setLoginCrendentials(prevState => ({
                ...prevState,
              
              }));
            }}
            value={subscribeToNewsletter}
            type="radio"
          /> */}
        </div>
      </div>
      <div className="signup-modal__signup-button" onClick={() => signup()}>
        Signup
      </div>
    </div>
  );
}
