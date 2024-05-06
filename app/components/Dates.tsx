'use client'
import { useEffect } from "react"
import dayjs from "dayjs";

export default function () {

  const today = dayjs();
  const formattedDate = today.format('dddd, MMMM D');

  useEffect(() => {
    setInterval(() => {
      console.log(`1s`);
    }, 1000);
  }, []);

  return (
    <div className="text-[60px]">
      {formattedDate}
    </div>
  )
}