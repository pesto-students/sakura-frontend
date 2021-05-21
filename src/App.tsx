import AppRoutes from "./routes";
import "./App.scss";
import AppLayout from "./pages/appLayout";
import {API_URL} from "./shared/consts";

console.log(API_URL);

function App() {
  return (
    <div>
      <div>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </div>
    </div>
  );
}

export default App;
