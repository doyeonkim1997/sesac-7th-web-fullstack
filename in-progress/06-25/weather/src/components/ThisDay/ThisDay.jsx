import React from 'react'
import { ThisDayWrapper, Top, Bottom } from './styles';
import CurrentTime from './CurrentTime';

const ThisDay = () => {
  let imageSrc = "./images/weatherIcons/rain.svg";
  return (
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>100°</h2>
          <h3>Now</h3>
        </div>
        <img src={imageSrc} alt="" />
      </Top>

      <Bottom>
        <CurrentTime />
        <div>
          Seoul - KR
        </div>
      </Bottom>

    </ThisDayWrapper >

  )
}

export default ThisDay