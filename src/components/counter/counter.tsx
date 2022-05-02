import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInCalendarDays, differenceInMonths, differenceInYears } from "date-fns";
import React, { useEffect, useState } from "react";

interface CounterDials { 
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
}

const Counter: React.FC<{}> = () => {
  const [startDate] = useState<Date>(getStartDate())
  const [dials, setDials] = useState<CounterDials>(calculateDials())

  function getStartDate(): Date {
    const localDate = new Date("2017-02-24")
    const nowUtc = Date.UTC(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate(),
      localDate.getUTCHours(), localDate.getUTCMinutes(), localDate.getUTCSeconds());
    return new Date(nowUtc)
  }

  function getCurrentDateUtc(): Date {
    const localDate = new Date()
    const nowUtc = Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(),
      localDate.getHours(), localDate.getMinutes(), localDate.getSeconds());
    return new Date(nowUtc)
  }

  function calculateDials(): CounterDials {
    const currentDateUtc = getCurrentDateUtc()

    const res: CounterDials = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      months: 0,
      years: 0
    }

    res.seconds = differenceInSeconds(currentDateUtc, startDate) % 60;
    res.minutes = differenceInMinutes(currentDateUtc, startDate) % 60;
    res.hours = differenceInHours(currentDateUtc, startDate) % 24;
    res.days = differenceInCalendarDays(currentDateUtc, startDate) % 12;
    res.months = differenceInMonths(currentDateUtc, startDate) % 12;
    res.years = differenceInYears(currentDateUtc, startDate);

    return res;
  }

  useEffect(() => {
    const interval = setInterval(() => setDials(calculateDials()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="counter">
      <div className="years">
        {dials.years}
      </div>
      <div className="months">
        {dials.months}
      </div>
      <div className="days">
        {dials.days}
      </div>
      <div className="hours">
        {dials.hours}
      </div>
      <div className="minutes">
        {dials.minutes}
      </div>
      <div className="seconds">
        {dials.seconds}
      </div>
    </div>
  )
}

export default Counter