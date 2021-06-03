import AppRoutes from "./routes";
import "./App.scss";
import AppLayout from "./pages/appLayout";
import React from "react";
import { Authenticator } from "./pages/authenticator";

class App extends React.Component<any, any> {
  state = { user: null, customState: null };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Authenticator />
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
