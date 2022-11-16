import { NewsCard, WeatherCard } from "../components/Home";

const HomeTemplate = ({ data }) => {
  return (
    <div className="h-full grid grid-cols-3 gap-4">
      <div className="sm:col-span-3 lg:col-span-2">
        <ul>
          {data &&
            data.map((news) => (
              <li key={news.publishedAt}>
                <NewsCard {...news} />
              </li>
            ))}
        </ul>
      </div>
      <div className="sm:hidden lg:block lg:col-span-1">
        <WeatherCard />
      </div>
    </div>
  );
};

export default HomeTemplate;
