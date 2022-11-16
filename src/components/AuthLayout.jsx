import { SIDEBAR_WIDTH } from "../config";

import { Header, Sidebar } from "./UI";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main
          style={{ marginLeft: SIDEBAR_WIDTH }}
          className="h-full w-full p-16"
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
