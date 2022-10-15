import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalContent,
  setShowModal,
} from "../../../Store/redux/slices/modalSlice";

export interface IConfirmPhoneNumberStepProps {}

export default function ConfirmPhoneNumberStep(
  props: IConfirmPhoneNumberStepProps,
) {
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");
  const dispatch = useDispatch();
  // dispatch(setShowModal(false));
  const confirmPhone = () => {
    fetch("http://localhost:4000/auth/confirm-phone", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        confirmPhone: confirmPhoneNumber,
      }), // body data type must match "Content-Type" header
    }).then(response => {
      if (response.status !== 200) {
        response.json().then(errorMessage => {
          // setLoginErrors({
          //   error: true,
          //   status: response.status,
          //   errorMessage: errorMessage,
          // });
          console.log("---hit---123");
          // dispatch(setModalContent("signup-step"));
        });
      } else if (response.status === 200) {
        response.json().then(() => {
          console.log("response324", response);
          dispatch(setShowModal(false));
          dispatch(setModalContent("empty"));
        });
      }
    });
  };
  return (
    <div className="confirm-phone-number">
      <div className="confirm-phone-number__wrap">
        <h1 className="confirm-phone-number__title">
          Please confirm your phone
        </h1>
        <input
          className="confirm-phone-number__phone-number-input"
          onChange={e => setConfirmPhoneNumber(e.target.value)}
          placeholder="(438) 534 3546"
          type="number"
        />
      </div>
      <button
        onClick={() => confirmPhone()}
        className="confirm-phone-number__confirm-button"
      >
        Confirm Phone Number
      </button>
    </div>
  );
}
