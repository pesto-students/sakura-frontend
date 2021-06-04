import Amplify, { Auth, Hub } from "aws-amplify";
import { useHistory, useLocation } from "react-router";
import { COGNITO_DOMAIN, COGNITO_REGION, SIGNIN_REDIRECT, SIGNOUT_REDIRECT, USER_POOL_ID, USER_POOL_WEB_CLIENT_ID } from "../../shared/env";

const authConfigObj = {
    Auth: {
        region: COGNITO_REGION,
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
        oauth: {
            domain: COGNITO_DOMAIN,
            scope: [
                "phone",
                "email",
                "profile",
                "openid",
                "aws.cognito.signin.user.admin",
            ],
            redirectSignIn: SIGNIN_REDIRECT,
            redirectSignOut: SIGNOUT_REDIRECT,
            responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
    },
}
Amplify.configure(authConfigObj);

export async function getAuthenticatedUserAttributes() {
    try {
        const { attributes } = await Auth.currentAuthenticatedUser();
        return attributes;
    } catch (err) {
        console.log("User not signed in");
        throw new UserNotAuthenticated();
    }
}

export async function getAuthenticatedUserToken() {
    try {
        const data = await Auth.currentSession();
        // return data;
        const idToken = data.getIdToken().getJwtToken();
        const accessToken = data.getAccessToken().getJwtToken();
        return { idToken, accessToken };
    } catch (err) {
        console.log(err);
        throw new UserNotAuthenticated();
    }
}

export class UserNotAuthenticated extends Error {
    constructor(m?: string) {
        super(m);
        Object.setPrototypeOf(this, UserNotAuthenticated.prototype);
    }
}


export function loginWithCognito() {
    Auth.federatedSignIn();
}

export function logoutWithCognito() {
    Auth.signOut();
}

export { Auth };