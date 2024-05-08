'use client'
import { useEffect, useState } from "react"
import dayjs from "dayjs";

function Dates () {

  const getDateString:() => string = () => {
    console.log(`run once`);
    
    return dayjs('2025-07-29').format('dddd, MMM. D');
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
    <div className="text-[40px]">
      {dateString}
    </div>
  )
}
export default Dates;