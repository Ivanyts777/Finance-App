import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './ModalLogOutForm.module.css';

const MODAL_ROOT = document.getElementById('root');

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.modalRef.current && e.target !== this.modalRef.current) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div
        className={s.modal_div}
        ref={this.modalRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        {/* <div className={s.modal}>{children}</div> */}
        {children}
      </div>,
      MODAL_ROOT,
    );
  }
}