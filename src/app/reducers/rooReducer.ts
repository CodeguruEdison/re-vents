import { eventReducer } from '../../features/event/eventReducer';
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers<IApplicationState>({
   
    event:eventReducer,
    form:formReducer
});

export default rootReducer;
