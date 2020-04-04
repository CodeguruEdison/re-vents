import { ActionCreator } from 'redux';
import { IModalOpenAction, ModalActionTypes, IModalCloseAction } from './modalConstant';
import { IModal } from './Entity/modal';


export const openModalAction:ActionCreator<IModalOpenAction>=(modalpayload:IModal)=>{
    return {
         type:ModalActionTypes.MODAL_OPEN,
         payload:modalpayload 
    }
 }

 export const closeModalAction:ActionCreator<IModalCloseAction>=(modalpayload:IModal)=>{
     return {
         type:ModalActionTypes.MODAL_CLOSE,
         payload: modalpayload
     }
 }