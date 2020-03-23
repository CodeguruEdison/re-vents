//https://medium.com/@januswel/createreducer-and-ducks-pattern-in-typescript-f560b2683b7b
import { Action } from "redux";
type Handlers<State, Types extends string, Actions extends Action<Types>> = {
  readonly [Type in Types]: (state: State, action: Actions) => State;
};
export const createReducer = <
  State,
  Types extends string,
  Actions extends Action<Types>
>(
  initialState: State,
  handlers: Handlers<State, Types, Actions>
) => (state = initialState, action: Actions) => {
  return handlers.hasOwnProperty(action.type)
    ? handlers[action.type as Types](state, action)
    : state;
};

/*export const createReducer1 = <State, Types extends string, Actions extends Action<Types>>(
    initialState: State,
    handlers: Handlers<State, Types, Actions>,
  ) => (state = initialState, action: Actions) =>
    handlers.hasOwnProperty(action.type) ? handlers[action.type as Types](state, action) : state
*/
