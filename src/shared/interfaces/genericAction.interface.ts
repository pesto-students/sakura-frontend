import { ActionsObservable } from "redux-observable";

export interface ReduxAction<T> {
    payload?: T;
    type: string;
}

export type ReduxActionObservable<T> = ActionsObservable<ReduxAction<T>>