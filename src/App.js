import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "./features/authSlice";
function App() {
  const user = useSelector(selectUserState);
  console.log("USER = ", user);

  return (
    <>
      {user ? (
        <Layout>
          <AuthenticatedApp />
        </Layout>
      ) : (
        <Layout>
          <UnauthenticatedApp />
        </Layout>

      )}
    </>
  );
}

export default App;
