import AppRoutes from "./routes";
import "./App.scss";
import AppLayout from "./pages/appLayout";
import Amplify, { Auth, Hub } from "aws-amplify";
import React from "react";

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

class App extends React.Component<any, any> {
  state = { user: null, customState: null };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({ user: data });
          break;
        case "signOut":
          this.setState({ user: null });
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => this.setState({ user }))
      .catch(() => console.log("Not signed in"));
  }

  render() {
    return (
      <div>
        <div className="App">
          <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
          <button onClick={() => Auth.signOut()}>Sign Out</button>
        </div>
        <div>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </div>
      </div>
    );
  }
}

export default App;
