export enum AsyncActionTypes {
  ASYNC_ACTION_START = "ASYNC_ACTION_START",
  ASYNC_ACTION_FINISH = "ASYNC_ACTION_END",
  ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR",
}
export interface IAsyncActionStart {
  type: AsyncActionTypes.ASYNC_ACTION_START;
}
export interface IAsyncActionFinish {
  type: AsyncActionTypes.ASYNC_ACTION_FINISH;
}
export interface IAsyncActionError {
  type: AsyncActionTypes.ASYNC_ACTION_ERROR;
}
export type AsyncAction =
| IAsyncActionStart
| IAsyncActionFinish
| IAsyncActionError
