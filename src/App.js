import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
function App() {
  const user = true;
  return (
    <>
      {user ? (
        //<Layout>
          <AuthenticatedApp />
        //</Layout>
      ) : (
        <UnauthenticatedApp />
      )}
    </>
  );
}

export default App;
