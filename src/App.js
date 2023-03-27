import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
import { useEffect } from "react";
import server from "./backend/server";
function App() {
<<<<<<< HEAD
  const user = false;
=======
  const user = true;

  useEffect(() => {
    server();
  }, []);

>>>>>>> a50bffd8b4420549dac717ee4400638bcb9ba1f1
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
