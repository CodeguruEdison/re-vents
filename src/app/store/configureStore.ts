import { IModalState } from './../../features/modals/Entity/IModalState';
import { IEventState } from './../../features/event/IEventState';
import { createStore, Store  } from "redux"

import {composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export interface IApplicationState {
    event:IEventState,
    form:any,
    modals:IModalState | null 
   
}
export  function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer,composeWithDevTools());
    return store;
  }
