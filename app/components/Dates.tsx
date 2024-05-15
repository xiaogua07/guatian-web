'use client'
import { useEffect, useMemo, useState } from "react"
import dayjs, { Dayjs } from "dayjs";

interface MyProps {
  today: Dayjs
}

const Dates: React.FC<MyProps> = ({today}) => {

  const formatStr = 'dddd, MMM. D';

  const dateString = useMemo(() => {
    return today.format(formatStr);
  }, [today]);

  return (
    <div className="text-[51px] h-[72px]">
      {dateString}
    </div>
  )
}
export default Dates;