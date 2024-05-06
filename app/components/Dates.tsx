'use client'
import { useEffect, useState } from "react"
import dayjs from "dayjs";

function Dates () {

  const getDateString:() => string = () => {
    console.log(`run once`);
    
    return dayjs().format('dddd, MMMM D');
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
    <div className="text-[60px]">
      {dateString}
    </div>
  )
}
export default Dates;