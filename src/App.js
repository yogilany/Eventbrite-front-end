import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
import { useEffect } from "react";
import server from "./backend/server";
function App() {
  const user = true;

  useEffect(() => {
    server();
  }, []);

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
