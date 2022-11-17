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

  async function fetchWeather(location) {
    setLoading(true);

    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=ab751d80e1e02084316b33160d5f56f5`;

      const data = await fetcher(apiUrl);
      setWeather(data);
    } catch (error) {
      console.error("TCL ~ fetchWeather ~ error", error);
    }

    setLoading(false);
  }

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
    if (location.lat && location.long) {
      fetchWeather(location);
    }
  }, [location]);

  return { location, weather, loading, fetchWeather };
};

export default useWeather;
