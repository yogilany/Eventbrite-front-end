import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
function App() {
  const user = false;
  return (
    <>
      {user ? (
        //<Layout>
         <Layout>
          <AuthenticatedApp />
         </Layout>
      ) : (
        //</Layout>
        <UnauthenticatedApp />
      )}
    </>
  );
}

export default App;
