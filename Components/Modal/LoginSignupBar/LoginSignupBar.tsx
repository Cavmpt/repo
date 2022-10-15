import * as React from "react";
import { useState } from "react";
import GeneralPurposeButton from "../../Buttons/GeneralPurposeButton/GeneralPurposeButton";
import { useDispatch } from "react-redux";
import { setUsername } from "../../../Store/redux/slices/userSlice";
import { setModalContent } from "../../../Store/redux/slices/modalSlice";

export interface ILoginSignupBarProps {}

export default function LoginSignupBar(props: ILoginSignupBarProps) {
  const [email, setEmail] = useState("");
  const [loginErrors, setLoginErrors] = useState<{
    error: boolean;
    status: number | null;
    errorMessage: string;
  }>({
    error: false,
    status: null,
    errorMessage: "",
  });
  const dispatch = useDispatch();

  const ContinueSignup = () => {
    if (email === "")
      return setLoginErrors({
        error: true,
        status: 400,
        errorMessage: "Please enter your email address",
      });
    dispatch(setUsername(email));
    // try {
    console.log(email);
    fetch("http://localhost:4000/auth/checkEmail", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }), // body data type must match "Content-Type" header
    }).then(response => {
      console.log("hit this spot");
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
        dispatch(setModalContent("login-step"));
      }
    });
  };

  return (
    <div className="loginSignup">
      <div className="loginSignup__content-wrap">
        <section className="login">
          <div className="login__email">
            <div className="login__email-title">Email:</div>
            {loginErrors.error && (
              <div className="login__email__error-message">
                {loginErrors.status} : {loginErrors.errorMessage}
              </div>
            )}
            <input
              value={email}
              className="login__input-email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <GeneralPurposeButton onClick={() => ContinueSignup()}>
            login or signup
          </GeneralPurposeButton>
        </section>
        <section className="login-with-social">
          <button className="login-with-google"> Login with Google</button>
          <button className="login-with-linkedin"> Login with Linkedin</button>
          <button className="login-with-linkedin"> Login with Linkedin</button>
        </section>
      </div>
    </div>
  );
}
