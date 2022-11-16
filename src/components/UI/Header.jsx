import useLogin from "../../hooks/useLogin";

import Button from "./Button";

const Header = () => {
  const { handleLogout } = useLogin();

  return (
    <header className="shadow py-2 px-8 sticky top-0 bg-white">
      <div className="ml-auto w-[80px]">
        <Button
          title="Logout"
          onClick={handleLogout}
          className="rounded-full bg-black text-white font-semibold"
        />
      </div>
    </header>
  );
};

export default Header;
