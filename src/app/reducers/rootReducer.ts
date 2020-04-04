import { eventReducer } from '../../features/event/eventReducer';
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';
import {reducer as formReducer} from 'redux-form';
import  modalReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers<IApplicationState>({
    event:eventReducer,
    form:formReducer,
    modals:modalReducer
});

export default rootReducer;
