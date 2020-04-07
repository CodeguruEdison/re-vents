import { IAuthState } from './../../features/auth/Entity/authEntity';
import { IModalState } from './../../features/modals/Entity/IModalState';
import { IEventState } from './../../features/event/IEventState';
import { createStore, Store,applyMiddleware  } from "redux"

import {composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk'
import { IAsyncState } from '../../features/async/Entity/asyncEntity';

import { reactReduxFirebase, getFirebase,ReactReduxFirebaseProvider  } from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';


export interface IApplicationState {
    readonly event:IEventState,
    form:any,
    modals:IModalState | null ,
    auth:IAuthState ,
    async:IAsyncState ,
    toastr:any
   
}

export  function configureStore(): Store<IApplicationState> {
    const middlewares =[thunk.withExtraArgument({getFirebase,getFirestore})]
    const composedEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
       // reactReduxFirebase(firebase, rrfConfig),
        //reduxFirestore(firebase)
    );
    const store = createStore(rootReducer,composedEnhancer);
    return store;
  }
