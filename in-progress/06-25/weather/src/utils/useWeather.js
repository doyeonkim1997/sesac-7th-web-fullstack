import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";

// ✅ city 매개변수 추가!
export async function getWeather(city = "Seoul") {
  const weather = await openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metric"
  });
  return weather;
}

const useWeather = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
  });

  return {
    ...rest,
    data
  };
};

export default useWeather;
