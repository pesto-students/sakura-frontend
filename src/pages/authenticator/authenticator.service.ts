import Amplify, { Auth, Hub } from "aws-amplify";
import { useHistory, useLocation } from "react-router";


Amplify.configure({
    Auth: {
        region: process.env["REACT_APP_COGNITO_REGION"],
        userPoolId: process.env["REACT_APP_USER_POOL_ID"],
        userPoolWebClientId: process.env["REACT_APP_USER_POOL_WEB_CLIENT_ID"],
        oauth: {
            domain: process.env["REACT_APP_COGNITO_DOMAIN"],
            scope: [
                "phone",
                "email",
                "profile",
                "openid",
                "aws.cognito.signin.user.admin",
            ],
            redirectSignIn: process.env["REACT_APP_SIGNIN_REDIRECT"],
            redirectSignOut: process.env["REACT_APP_SIGNOUT_REDIRECT"],
            responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
    },
});


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