import React, { FC } from "react";
import { Modal } from "semantic-ui-react";
import {  IRegisterModalProps } from "./Entity/modal";
import { closeModalAction } from "./modalActions";
import { connect } from "react-redux";
import RegisterForm from "../auth/Register/RegisterForm";

export const RegisterModal: FC<IRegisterModalProps> = props => {
  const { closeModal } = props;
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login to Re-vents</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <RegisterForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
const mapDispatchToProps = {
  closeModal: closeModalAction
};
export default connect(null, mapDispatchToProps)(RegisterModal);
