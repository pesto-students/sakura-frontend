import AppRoutes from "./routes";
import "./App.scss";
import AppLayout from "./pages/appLayout";

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
