import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalLogOutForm from "./ModalLogOutForm/ModalLogOutForm";
import { modalLoginOut } from "../../redux/Slice";
import { userLoginOut } from "../Operations/operationsAuth";
import styles from "./ModalLogOut.module.css";

const { modalWrapper, modalContent, modalLogout_p, modalLogout_btn, yes_no_btn_header } = styles;

const LogoutModal = () => {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalLoginOut(false));
  };

  return (
    <ModalLogOutForm onClose={closeModal}>
      <div className={modalWrapper}>
        <div className={modalContent}>
          <p className={modalLogout_p}>Do you want to exit ?</p>
          <div className={modalLogout_btn}>
            <button type="button" className={yes_no_btn_header} onClick={() => dispatch(userLoginOut(session.token), closeModal())}>
              Yes
            </button>
            <button
              type="button"
              className={yes_no_btn_header}
              onClick={() => {
                closeModal();
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </ModalLogOutForm>
  );
};

export default LogoutModal;
