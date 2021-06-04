import { $CombinedState, ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { push } from 'connected-react-router';
import { ActionsObservable, combineEpics, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, filter, mergeMap, catchError, concatMap } from 'rxjs/operators';
import store, { RootState } from '../../appStore/store';
import { getAuthenticatedUserAttributes, getAuthenticatedUserToken, loginWithCognito, logoutWithCognito } from './authenticator.service';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userState: {},
        showLoginModal: false,
        showLogoutModal: false
    } as authState,
    reducers: {
        attemptLogin: () => {
            // redirect to cognito
            // set redirection url in localStorage
        },
        transferringToCognito: () => { },
        successfulLogin: (state) => {
            // set user as logged in
            state.userState.isLoggedIn = true
            // save user data in state
        },
        attemptLogout: () => { },
        successfulLogout: (state) => {
            // clear userData state values
            state.userState.isLoggedIn = false;
            state.userState.userData = {};
        },
        updateUserData: () => { },
        refreshUserData: (state, action) => {
            state.userState.userData = action.payload;
        },
        refreshUserTokens: (state, action) => {
            state.userState.userToken = action.payload;
        },
        tokenRetrievalError: () => { },
        showLoginModal: (state) => {
            state.showLoginModal = true;
        },
        closeLoginModal: (state) => {
            state.showLoginModal = false;
        },
        showLogoutModal: (state) => {
            state.showLogoutModal = true;
        },
        closeLogoutModal: (state) => {
            state.showLogoutModal = false;
        }
    }
});

const attemptSigninEpic = (action$: ActionsObservable<ActionCreatorWithPayload<any>>,
    state$: StateObservable<RootState>) =>
    action$.pipe(
        filter(attemptLogin.match),
        map(action => {
            // save current path
            const currentLocation = state$.value.router.location.pathname;
            localStorage.setItem("auth-redirect", currentLocation);
            loginWithCognito();
            return transferringToCognito();
        })
    );


const signinSuccessfulEpic = (action$: ActionsObservable<ActionCreatorWithPayload<any>>) =>
    action$.pipe(
        filter(successfulLogin.match),
        map(action => {
            const redirectLocation = localStorage.getItem("auth-redirect");
            store.dispatch(push(`${redirectLocation}`));
            return updateUserData();
        })
    );




const updateUserDataEpic = (action$: ActionsObservable<ActionCreatorWithPayload<any>>) =>
    action$.pipe(
        filter(updateUserData.match),
        mergeMap(action => {
            return from(getAuthenticatedUserAttributes()).pipe(
                map(res => refreshUserData(res)),
                catchError(err => of(tokenRetrievalError()))
            )
        })
    );


const updateUserTokensEpic = (action$: ActionsObservable<ActionCreatorWithPayload<any>>) =>
    action$.pipe(
        filter(updateUserData.match),
        mergeMap(action => {
            return from(getAuthenticatedUserToken()).pipe(
                map(res => refreshUserTokens(res)),
                catchError(err => of(tokenRetrievalError()))
            )
        })
    );



const attemptSignOutEpic = (action$: ActionsObservable<ActionCreatorWithPayload<any>>) =>
    action$.pipe(
        filter(attemptLogout.match),
        map(action => {
            logoutWithCognito();
            return transferringToCognito();
        })
    );






export const authEpic = combineEpics(attemptSigninEpic, attemptSignOutEpic,
    updateUserDataEpic, updateUserTokensEpic, signinSuccessfulEpic)



export const { attemptLogin, successfulLogin, attemptLogout,
    successfulLogout, refreshUserData, refreshUserTokens,
    transferringToCognito, tokenRetrievalError,
    updateUserData, showLoginModal, closeLoginModal,
    showLogoutModal, closeLogoutModal } = authSlice.actions;
export default authSlice.reducer;


export type userState = {
    isLoggedIn: boolean,
    userData: any,
    userToken: {
        idToken: string,
        accessToken: string
    }
}

export type authState = {
    userState: userState,
    showLoginModal: boolean,
    showLogoutModal: boolean
}