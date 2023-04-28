import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectUserState } from "./features/authSlice";
function App() {
  const user = useSelector(selectUserState);
  const token = useSelector(selectCurrentToken);
  console.log("User = ", user);
  console.log("Token = ", token);

  return (
    <>
      {token ? (
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
