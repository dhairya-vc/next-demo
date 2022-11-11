import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <h2>Home page</h2>
			<br />
      <h3>
        <Link href="/users">Go to users page</Link>
      </h3>
			<h3>
        <Link href="/user-static">Go to user-static page</Link>
      </h3>
    </Layout>
  );
}
