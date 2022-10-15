import * as React from "react";
import { RootState } from "../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import LoginSignupBar from "./LoginSignupBar/LoginSignupBar";
import LoginStep from "./LoginStep/LoginStep";
import ConfirmPhoneNumberStep from "./ConfirmPhoneNumberStep/ConfirmPhoneNumberStep";
import {
  setShowModal,
  setModalContent,
} from "../../Store/redux/slices/modalSlice";
import SignupStep from "./SignupStep/SignupStep";

export interface IModalProps {}

export default function Modal(props: IModalProps) {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.modal.showModal);
  const ModalContent = useSelector(
    (state: RootState) => state.modal.modalContent,
  );

  const handleClose = () => {
    dispatch(setShowModal(false));
    dispatch(setModalContent("empty"));
  };

  const RenderModalElement = () => {
    switch (ModalContent) {
      case "oauth":
        return <LoginSignupBar />;
      case "signup-step":
        return <SignupStep />;
      case "login-step":
        return <LoginStep />;
      case "confirm-phone-number":
        return <ConfirmPhoneNumberStep />;
      case "empty":
        return <LoginSignupBar />;
      default:
        return <LoginSignupBar />;
    }
  };

  return (
    <>
      <div className={showModal ? "overlay" : "no-overlay"} />
      <div className={showModal ? "modal" : "modal--hidden"}>
        <section className="modal-main">
          <div className="modal-main__handle-close" onClick={handleClose}>
            <div className="modal-main__close-button">x</div>
          </div>
          <RenderModalElement />
        </section>
      </div>
    </>
  );
}
