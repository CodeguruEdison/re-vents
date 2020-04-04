import React, {  } from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../app/store/configureStore";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import TestModal from "./TestModal";

const modalLookUp: any = {
  TestModal: TestModal,
  LoginModal: LoginModal,
  RegisterModal: RegisterModal
};
export const ModalManager= (props:any) => {
//export const ModalManager: FC<IModalManagerProps> = props => {
  const { currentModal } = props;

  console.log(currentModal);
  let renderedModal = null;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUp[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    currentModal: store.modals?.modal
    //currentModal: store.event.events[0]
  };
};

export default connect(mapStateToProps)(ModalManager);
