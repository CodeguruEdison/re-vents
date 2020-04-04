import React from "react";
import { Modal } from "semantic-ui-react";
import { closeModalAction } from "./modalActions";
import { connect } from "react-redux";


export const TestModal = () => {
  return (
    <div>
      <Modal closeIcon="close" open={true}>
        <Modal.Header>Test Modal</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>Test Modal... nothing to see here</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = {
  closeModal:closeModalAction
 };
export default connect(null, mapDispatchToProps)(TestModal);