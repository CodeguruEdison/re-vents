import React, { FC } from "react";
import { IModal } from "../modals/Entity/modal";
import { Button } from "semantic-ui-react";
import { openModalAction } from "../modals/modalActions";
import { connect } from "react-redux";

export interface ITestProps {
  openModal: (modal: IModal) => void;
}
export const testComponent: FC<ITestProps> = props => {
  const { openModal } = props;
  
  return (
    <div>
      <Button
        onClick={() =>
          openModal({ modalType: "TestModal", modalProps: { open: true } })
        }
        color="teal"
        content="Open Modal"
      />
    </div>
  );
};
const mapDispatchToProps = {
   openModal:openModalAction
  };

  export default connect(null,mapDispatchToProps)(testComponent);