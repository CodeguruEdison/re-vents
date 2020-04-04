import { IModal } from "./Entity/modal";

export enum ModalActionTypes {
     MODAL_OPEN ='MODAL_OPEN',
     MODAL_CLOSE ='MODAL_CLOSE'
}
export interface IModalOpenAction {
    type: ModalActionTypes.MODAL_OPEN;
    payload:IModal
  }
  export interface IModalCloseAction {
    type: ModalActionTypes.MODAL_CLOSE;
    payload:IModal
  }
export type ModalAction =  IModalOpenAction | IModalCloseAction;