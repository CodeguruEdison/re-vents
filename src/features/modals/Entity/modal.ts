
export interface IModal {
    modalType: string |null;
    modalProps:IModalProps |null
}

export interface IModalProps {
    open:boolean | null;
}

export interface IModalManagerProps {
    currentModal?:IModal;
    closeModal?:()=>void;
}

export interface ILoginModalProps {
    closeModal:()=>void;
}

export interface IRegisterModalProps {
    closeModal:()=>void;
}