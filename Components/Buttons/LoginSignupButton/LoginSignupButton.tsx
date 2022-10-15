import * as React from "react";
import { useDispatch } from "react-redux";
import {
  setShowModal,
  setModalContent,
} from "../../../Store/redux/slices/modalSlice";

export interface ILoginSignupProps {}

export default function LoginSignup(props: ILoginSignupProps) {
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch(setShowModal(true));
    dispatch(setModalContent("oauth"));
  };

  return (
    <button onClick={e => handleClick(e)} className="login-signup-button">
      Login or Signup
    </button>
  );
}
