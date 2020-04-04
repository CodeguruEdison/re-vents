import React, { FC } from "react";
import { Modal } from "semantic-ui-react";
import LoginForm from "../auth/Login/LoginForm";
import { ILoginModalProps } from "./Entity/modal";
import { closeModalAction } from "./modalActions";
import { connect } from "react-redux";

export const LoginModal: FC<ILoginModalProps> = props => {
  const { closeModal } = props;
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login to Re-vents</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <LoginForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
const mapDispatchToProps = {
  closeModal: closeModalAction
};
export default connect(null, mapDispatchToProps)(LoginModal);
