import Layout from "../components/Layout";
import { Input, Button } from "../components/UI";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { handleSubmit, username, setUsername } = useLogin();

  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-t from-[#b665d9] to-[#ee609c]   ">
      <div className="px-16 py-8 shadow-lg rounded-md border bg-white">
        <h2 className="font-semibold text-2xl mb-8 text-center">Login</h2>
        <Input
          className="mb-4"
          inputClassName="bg-black text-white rounded-full"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <Input
            type="password"
            className="mb-4"
            inputClassName="bg-black text-white rounded-full"
            placeholder="Password"
          /> */}
        <Button
          title="Login"
          className="bg-white text-black border-2 rounded-full"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
