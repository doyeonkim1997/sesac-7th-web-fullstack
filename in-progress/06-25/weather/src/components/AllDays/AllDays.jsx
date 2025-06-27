
import React from 'react'
import { AllDaysWrapper } from './styles.js';
import Day from './Day.jsx';
import { useWeatherForecast } from '../../utils/useWeatherForecast.js';

const AllDays = () => {
  const { days, isLoading } = useWeatherForecast("Seoul");


  return (
    <AllDaysWrapper>
      {days.map(day => (
        <Day key={day.date} day={day} />
      ))}

    </AllDaysWrapper>
  )
}


export default AllDays