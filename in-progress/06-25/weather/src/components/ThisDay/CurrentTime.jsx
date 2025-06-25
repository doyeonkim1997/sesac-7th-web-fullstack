

import React from 'react'

export const CurrentTime = () => {
  const time = new Intl.DateTimeFormat("ko-kr",
    {
      hour: "numeric",
      minute: "numeric",
    }
  ).format(
    new Date()
  );
  return (
    <div>{time}</div>
  )
}

export default CurrentTime