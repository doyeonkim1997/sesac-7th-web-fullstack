import React, { useEffect, useState } from 'react'
import { ThisDayWrapper, Top, Bottom } from './styles';
import CurrentTime from './CurrentTime';
import useWeather from '../../utils/useWeather.js';

const ThisDay = () => {
  const { data, isLoading } = useWeather("seoul");
  const temperature = Math.round(data?.main?.temp || 0);
  const cityName = data?.name;

  const weatherIcon = data?.weather[0].main;

  let imageSrc = "./images/weatherIcons/";

  if (weatherIcon === "Clear") {
    imageSrc = "./images/weatherIcons/clear-sky.svg";

  } else if (weatherIcon === "Clouds") {
    imageSrc = "./images/weatherIcons/few-clouds.svg";

  } else if (weatherIcon === "Atmosphere") {
    imageSrc = "./images/weatherIcons/mist.svg";

  } else if (weatherIcon === "Rain") {
    imageSrc = "./images/weatherIcons/rain.svg";

  } else if (weatherIcon === "Snow") {
    imageSrc = "./images/weatherIcons/snow.svg";

  } else if (weatherIcon === "Thunderstorm") {
    imageSrc = "./images/weatherIcons/thunderstorm.svg";
  }


  return (
    <ThisDayWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Top>
            <div>
              <div><h2>{temperature}°</h2></div>
              <div><h3>Now</h3></div>
            </div>
            <img src={imageSrc} alt="weather icon" />
          </Top>

          <Bottom>
            <CurrentTime />
            <div>
              {cityName} - {data?.sys?.country}
            </div>
          </Bottom>
        </>
      )}
    </ThisDayWrapper>
  );
};

// ✅ 여기서 export 해야 함!
export default ThisDay;