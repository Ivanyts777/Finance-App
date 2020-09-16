import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalLogOutForm from './ModalLogOutForm/ModalLogOutForm';
import { modalLoginOut } from '../../redux/Actions';
import { userLoginOut } from "../Operations/operationsAuth";
// import { logoutOperation } from '../../redux/authUser/operations';
import s from './ModalLogOut.module.css';

const LogoutModal = () => {
const session = useSelector((state) => state.session);
const dispatch = useDispatch();
//   const closeModalOn = () => dispatch(modalLoginOut());


    const closeModal =() => {
    dispatch(modalLoginOut(false));
    }

  return (
    <ModalLogOutForm onClose={closeModal}>
      <div className={s.modalWrapper}>
        <div className={s.modalContent}>
          <p className={s.modalLogout_p}>Do you want to exit ?</p>
          <div className={s.modalLogout_btn}>
            <button
              type="button"
              className={s.yes_no_btn_header}
              onClick={() => dispatch(userLoginOut(session.token))}
            >
              Yes
            </button>
            <button
              type="button"
              className={s.yes_no_btn_header}
              onClick={() => {
                // logoutFunc();
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