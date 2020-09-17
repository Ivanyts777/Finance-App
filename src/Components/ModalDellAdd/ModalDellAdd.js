import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalDellAddForm from "./ModalDellAddForm/ModalDellAddForm";
import { modalDel } from "../../redux/Slice";
import { removePost } from "../Operations/operationsBD";
import styles from "./ModalDellAdd.module.css";

const { modalWrapper, modalContent, modalLogout_p, modalLogout_btn, yes_no_btn_header } = styles;

const ModalDellAdd = () => {
  // const editTaransactionId = useSelector(state => state.global.isModalEditTransactionOpen);
  const globalModal = useSelector(state => state.global.isModalDelTransaction)
  const editModal = useSelector(state => state.finance.data.find(el => el._id === globalModal))
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalDel(false));
  };

  return (
    <ModalDellAddForm onClose={closeModal}>
      <div className={modalWrapper}>
        <div className={modalContent}>
          <p className={modalLogout_p}>Do you want to delete this transaction ?</p>
          <div className={modalLogout_btn}>
            <button type="button" className={yes_no_btn_header} onClick={() => dispatch(removePost(editModal._id, token), closeModal())}>
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
    </ModalDellAddForm>
  );
};

export default ModalDellAdd;
