
import OpenWeather from 'openweathermap-ts';

const openWeather = new OpenWeather({
  apiKey: "a13d420489fdf87a60e6fbc0706e49ed",
});

openWeather.setUnits('metric'); // 섭씨 

export default openWeather;