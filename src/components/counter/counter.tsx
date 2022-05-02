import React, { useState } from "react";
import CounterDisplay, { CounterDisplayType } from "../counter-display.tsx/counter-display";

function Counter() {
  const localDate = new Date("2017-02-24")
  const nowUtc = Date.UTC(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate(),
    localDate.getUTCHours(), localDate.getUTCMinutes(), localDate.getUTCSeconds());
  const date = new Date(nowUtc)

  console.log(date)

  const [startDate] = useState(date)

  return (
    <div className="counter">
      <div className="years">
        <CounterDisplay startDate={startDate} type={CounterDisplayType.YEARS} />
      </div>
      <div className="months">
        <CounterDisplay startDate={startDate} type={CounterDisplayType.MONTHS} />
      </div>
      <div className="days">
        <CounterDisplay startDate={startDate} type={CounterDisplayType.DAYS} />
      </div>
      <div className="hours">
        <CounterDisplay startDate={startDate} type={CounterDisplayType.HOURS} />
      </div>
      <div className="minutes">
        <CounterDisplay startDate={startDate} type={CounterDisplayType.MINUTES} />
      </div>
      <div className="seconds">
        <CounterDisplay startDate={startDate} type={CounterDisplayType.SECONDS} />
      </div>
    </div>
  )
}

export default Counter