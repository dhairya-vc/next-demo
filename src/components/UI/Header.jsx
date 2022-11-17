import ProfileCard from "./ProfileCard";

import { Input } from "./index";

const Header = () => {
  return (
    <header className="shadow py-2 px-8 sticky top-0 bg-white grid grid-cols-3 items-center">
      <h2 className="font-bold text-3xl text-gray-600">News.co</h2>

      <Input
        inputClassName="bg-slate-50 rounded-lg border shadow outline-none"
        placeholder="Search"
      />

      <div className="ml-auto">
        <ProfileCard />
      </div>
    </header>
  );
};

export default Header;
