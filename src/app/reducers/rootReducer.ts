
import { eventReducer } from '../../features/event/eventReducer';
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import  modalReducer from '../../features/modals/modalReducer';
import  authReducer  from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers<IApplicationState>({
    event:eventReducer,
    form:formReducer,
    modals:modalReducer,
    auth:authReducer,
    async:asyncReducer,
    toastr:toastrReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer
});

export default rootReducer;
