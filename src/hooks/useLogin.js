import { useState } from "react";

import fetcher from "../lib/fetchJson";
import useUser from "../lib/useUser";

const useLogin = () => {
  const { mutateUser } = useUser({
    redirectTo: "/home",
    redirectIfFound: true,
  });

  const [username, setUsername] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileCard = () => {
    setIsProfileOpen((val) => !val);
  };

  async function handleSubmit() {
    const body = {
      username,
    };
    try {
      mutateUser(
        await fetcher("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  }

  async function handleLogout() {
    try {
      mutateUser(
        await fetcher("/api/logout", {
          method: "POST",
        }),
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  }

  return {
    isProfileOpen,
    username,
    handleSubmit,
    toggleProfileCard,
    setUsername,
    handleLogout,
  };
};

export default useLogin;
