import React, { useEffect, useState } from "react";
import { differenceInCalendarDays, differenceInMonths, differenceInHours, differenceInMinutes, differenceInSeconds, differenceInYears } from "date-fns"

export enum CounterDisplayType {
  YEARS = "years",
  MONTHS = "months",
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
}

interface Props {
  startDate: Date,
  type: CounterDisplayType
}

function CounterDisplay(props: Props) {
  const [startingDate] = useState(props.startDate)
  const [type] = useState(props.type)
  const [digits, setDigits] = useState(calculateDigits())

  function calculateDigits(): number {
    const localDate = new Date()
    const nowUtc = Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(),
      localDate.getHours(), localDate.getMinutes(), localDate.getSeconds());
    const date = new Date(nowUtc)

    if (type === "seconds") {
      return differenceInSeconds(date, startingDate) % 60;
    }

    if (type === "minutes") {
      return differenceInMinutes(date, startingDate) % 60;
    }

    if (type === "hours") {
      return differenceInHours(date, startingDate) % 24;
    }

    if (type === "days") {
      return differenceInCalendarDays(date, startingDate) % 12;
    }

    if (type === "months") {
      return differenceInMonths(date, startingDate) % 12;
    }

    return differenceInYears(date, startingDate);
  }

  useEffect(() => {
    const interval = setInterval(() => setDigits(calculateDigits()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="counter-display">
      {digits}
    </div>
  )
}

export default CounterDisplay