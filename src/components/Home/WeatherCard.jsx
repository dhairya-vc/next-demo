import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useWeather from "../../hooks/useWeather";

const WeatherCard = () => {
  const { weather, loading } = useWeather();

  return (
    <div className="p-4 shadow rounded-xl border">
      <h3 className="font-medium text-xl pb-2 border-b text-gray-500">
        {loading ? <Skeleton /> : weather.name}
      </h3>
      <div className="flex gap-4 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 font-medium">
            {loading ? <Skeleton width={70} /> : weather.weather[0].main}
          </span>
          <span className="text-lg font-medium text-gray-700">
            {loading ? <Skeleton width={70} /> : Number(weather.main.temp)}
            {!loading && <span>&#8451;</span>}
          </span>
        </div>
        <div className="w-[100px] h-[100px]">
          {loading ? (
            <Skeleton circle height="100%" containerClassName="h-full w-full" />
          ) : (
            <Image
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              width={100}
              height={100}
              alt={weather.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
