import AuthLayout from "../components/AuthLayout";
import fetcher from "../lib/fetchJson";
import useUser from "../lib/useUser";
import HomeTemplate from "../templates/Home";

const Home = ({ data }) => {
  useUser({ redirectTo: "/" });

  return <HomeTemplate data={data} />;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = `${process.env.NEXT_PUBLIC_NEWS_API_URL}top-headlines?country=us&category=business&apiKey=${apiKey}`;

  const { articles } = await fetcher(url);

  return {
    props: {
      data: articles,
    },
  };
}
