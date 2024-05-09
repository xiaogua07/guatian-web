'use client'
import { useEffect, useState } from "react"
import dayjs from "dayjs";

function Dates () {

  const getDateString:() => string = () => {
    return dayjs().format('dddd, MMM. D');
  }

  const [dateString, setDateString] = 
    useState(getDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateString(getDateString());
    }, 1000 * 60 * 60);

    return () => {
      clearInterval(timer);
    }
  });

  return (
    <div className="text-[54px] font-[poppins-simi]">
      {dateString}
    </div>
  )
}
export default Dates;