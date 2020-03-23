import { IEventState } from './../../features/event/IEventState';
import { createStore, Store  } from "redux"
import rootReducer from "../reducers/rooReducer";
import {composeWithDevTools } from 'redux-devtools-extension';

export interface IApplicationState {
    event:IEventState
}
export  function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer,composeWithDevTools());
    return store;
  }
