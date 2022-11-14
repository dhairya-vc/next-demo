import { Header } from "./UI";

const AuthLayout = ({ children }) => {
  return (
    <main className="h-full">
      <Header />
      {children}
    </main>
  );
};

export default AuthLayout;
