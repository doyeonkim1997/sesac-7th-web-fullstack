import React from "react";
import { useTime } from "../../utils/useTime";

const CurrentTime = () => {
  const currentTime = useTime(10000); // 10초마다 시간 업데이트


  const time = new Intl.DateTimeFormat("ko-kr",
    {
      hour: "numeric",
      minute: "numeric",
    }
  ).format(
    currentTime
  );
  return (
    <div>{time}</div>
  )
}

export default CurrentTime

// setInterval은 내장함수로 주기적으로 코드를 실행할 수 있게 해준다.