import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";

export async function getWeather() {
  const weather = await openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metric"
  });
  return weather;
}

const useWeather = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    // 캐시 및  refetch 기준 키
    queryKey: ["weather", city],

    // 데이터를 가져오는 비동기 함수
    queryFn: () => getWeather(city),
  });

  return {
    ...rest,
    data
  };
}

export default useWeather;