import React from "react";
import AuthLayout from "../components/AuthLayout";
import useUser from "../lib/useUser";

const Home = () => {
  useUser({ redirectTo: "/" });

  return <div>Home</div>;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
