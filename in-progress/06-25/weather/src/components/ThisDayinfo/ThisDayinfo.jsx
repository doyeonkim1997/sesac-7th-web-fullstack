import React from 'react';
import { ThisDayInfoWrapper, ImgWrapper } from './styles';

const infoItems = [
  {
    icon: './images/temperature.svg',
    label: 'Temperature',
    value: '21°C feels like 22°C',
  },
  {
    icon: './images/pressure.svg',
    label: 'Pressure',
    value: '1013 hPa',
  },
  {
    icon: './images/humidity.svg',
    label: 'Humidity',
    value: '65%',
  },
  {
    icon: './images/wind.svg',
    label: 'Wind',
    value: '5.2 m/s',
  },
];

const ThisDayInfo = () => {
  return (
    <ThisDayInfoWrapper>
      <div className='info-row'>
        <ImgWrapper>
          <h2>Temparature</h2>
          <img src='./images/temperature.svg' alt='Temperature Icon' />
          <p>21°C feels like 22°C</p>
        </ImgWrapper>
      </div>

      <div className='info-row'>
        <ImgWrapper>
          <h2>Temparature</h2>
          <img src='./images/temperature.svg' alt='Temperature Icon' />
          <p>21°C feels like 22°C</p>
        </ImgWrapper>
      </div>

      <div className='info-row'>
        <ImgWrapper>
          <h2>Temparature</h2>
          <img src='./images/temperature.svg' alt='Temperature Icon' />
          <p>21°C feels like 22°C</p>
        </ImgWrapper>
      </div>

      <div className='info-row'>
        <ImgWrapper>
          <h2>Temparature</h2>
          <img src='./images/temperature.svg' alt='Temperature Icon' />
          <p>21°C feels like 22°C</p>
        </ImgWrapper>
      </div>
    </ThisDayInfoWrapper>
  )
};


export default ThisDayInfo;
