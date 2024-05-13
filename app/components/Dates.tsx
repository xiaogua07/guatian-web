'use client'
import { useEffect, useMemo, useState } from "react"
import dayjs, { Dayjs } from "dayjs";
import MiniClock from "./MiniClock";

interface MyProps {
  today: Dayjs
}

const Dates: React.FC<MyProps> = ({today}) => {

  const formatStr = 'dddd, MMM. D';

  const dateString = useMemo(() => {
    return today.format(formatStr);
  }, [today]);

  return (
    <div className="text-[54px]">
      {dateString}

      <MiniClock today={today} />
    </div>
  )
}
export default Dates;