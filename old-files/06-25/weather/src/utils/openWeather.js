
import OpenWeather from 'openweathermap-ts';

const openWeather = new OpenWeather({
  apiKey: "-",
});

openWeather.setUnits('metric'); // 섭씨 

export default openWeather;