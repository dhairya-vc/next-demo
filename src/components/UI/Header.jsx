import Button from "./Button";
import useLogin from "../../hooks/useLogin";

const Header = () => {
  const { handleLogout } = useLogin();

  return (
    <header className="shadow py-2 px-8">
      <nav>
        <div className="ml-auto w-[80px]">
          <Button
            title="Logout"
            onClick={handleLogout}
            className="rounded-full bg-black text-white font-semibold"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
