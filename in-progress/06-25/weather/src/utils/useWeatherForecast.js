import { useQuery } from "@tanstack/react-query";
import openWeather from "./openWeather.js";

const getWeather = (city = "Seoul") => {
  return openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metric"
  });
};



const days = (() => {
  if (!data?.list) return [];

  const grouped = data.list.reduce((acc, forecast) => {
    const date = forecast.dt_txt.split(" ")[0];
    if (!acc[date]) {
      acc[date] = { date, forecast: [] };
    }
    acc[date].forecast.push(forecast);
    return acc;
  }, {});

  return Object.values(grouped);
})();

export const useWeatherForecast = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    queryKey: ["weather-forecast", city],
    queryFn: () => getWeather(city),
  })
  return {
    ...rest,
    days,
    data,
  };
}
export default useWeatherForecast;