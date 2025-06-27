import { useQuery } from "@tanstack/react-query";
import openWeather from "./openWeather.js";
import { useMemo } from "react";


const getWeather = (city = "Seoul") => {
  return openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metric"
  });
};

export const useWeatherForecast = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    queryKey: ["weather-forecast", city],
    queryFn: () => getWeather(city),
  });

  const days = useMemo(() => {
    if (!data || !data.list) return [];
    const grouped = data.list.reduce((acc, forecast) => {
      const date = forecast.dt_txt.split(" ")[0];
      if (!acc[date]) {
        acc[date] = { date, forecast: [] };
      }
      acc[date].forecast.push(forecast);
      return acc;
    }, {});
    return Object.values(grouped);
  }, [data]);

  return {
    ...rest,
    days,
    data,
  };
};
