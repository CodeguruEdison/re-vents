import { eventReducer } from '../../features/event/eventReducer';
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';
import {reducer as formReducer} from 'redux-form';
import  modalReducer from '../../features/modals/modalReducer';
import { authReducer } from '../../features/auth/authReducer';

const rootReducer = combineReducers<IApplicationState>({
    event:eventReducer,
    form:formReducer,
    modals:modalReducer,
    auth:authReducer
});

export default rootReducer;
