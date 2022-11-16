import { useState, useEffect } from "react";

import fetcher from "../lib/fetchJson";

const useWeather = () => {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const locationSuccess = (data) => {
    setLocation({
      lat: data.coords.latitude,
      long: data.coords.longitude,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationSuccess, () => {
        console.error("Location failed");
      });
    } else {
      alert("Sorry, your browser does not support geolocation services.");
    }
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?lat=23.0162432&lon=72.4762624&units=metric&appid=ab751d80e1e02084316b33160d5f56f5";

      const data = await fetcher(apiUrl);

      setWeather(data);
      setLoading(false);
    }

    fetchWeather();
  }, [location]);

  return { weather, loading };
};

export default useWeather;
