
import { eventReducer } from '../../features/event/eventReducer';
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';
import {reducer as formReducer} from 'redux-form';
import  modalReducer from '../../features/modals/modalReducer';
import  authReducer  from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers<IApplicationState>({
    event:eventReducer,
    form:formReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer
});

export default rootReducer;
