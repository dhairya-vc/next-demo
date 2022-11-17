import Image from "next/image";

import useLogin from "../../hooks/useLogin";
import useUser from "../../lib/useUser";

const ProfileCard = () => {
  const { isProfileOpen, handleLogout, toggleProfileCard } = useLogin();
  const { user } = useUser();

  return (
    <div className="relative">
      <div className="cursor-pointer rounded-full" onClick={toggleProfileCard}>
        <Image
          className="rounded-full"
          src={user?.avatarUrl}
          width={40}
          height={40}
          alt="user profile"
        />
      </div>
      {isProfileOpen && (
        <div className="absolute w-44 rounded-lg bg-white border shadow p-4 right-0 top-11">
          <ul>
            <li className="cursor-pointer	 p-1 border-b border-gray-100 font-medium text-gray-500 text-lg">
              {user.login}
            </li>
            <li
              className="cursor-pointer	 p-1 border-b border-gray-100 font-medium text-gray-500 text-lg"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
