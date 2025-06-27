

import React from 'react'
import { BottomPart, DayWrapper, TopPart } from './styles'

const Day = ({ day }) => {
  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{day.name}</h2>
          <h3>{day.date}</h3>
        </div>
        <img src={`./images/weatherIcons/${day.icon}.svg`} alt="" />
      </TopPart>
      <BottomPart>
        <h2>{day.temp.max} °C</h2>
        <h3>{day.temp.min} °C</h3>
      </BottomPart>
    </DayWrapper>
  )
}

export default Day;