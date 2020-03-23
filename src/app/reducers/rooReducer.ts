import { eventReducer } from '../../features/event/eventReducer';
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';

const rootReducer = combineReducers<IApplicationState>({
    event:eventReducer
});

export default rootReducer;
