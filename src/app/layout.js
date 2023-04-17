import { Suspense } from "react";

import Loadings from "../Components/loadings";
export const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}

      <main id="centerView" className="">
        <Suspense fallback={<Loadings />}>{children}</Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};
