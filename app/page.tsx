'use client'

import Dates from "./components/Dates";
import Divider from "./components/Divider";
import { useEffect, useState } from "react";
import DatesGroups, { DatesGroup } from "./components/DatesGroups/DatesGroups";
import ProgressBarByYear from "./components/ProgressBarByYear";
import dayjs from "dayjs";
import Weather from "./components/Weather";
import useQWeather from "./hooks/useQWeather";

export default function Home() {

  const datesGroups:  DatesGroup[] = [
    {
      name: "瓜",
      dates: [
        // 理发
        // 换床单
        {
          title:  '🛏️',
          lastDate: '2024-07-05',
        },
      ]
    },
    {
      name: "陆",
      dates: [
        // 理发
        {
          title:  '💇🏻',
          lastDate: '2024-07-13',
        },
        // 换床单
        {
          title:  '🛏️',
          lastDate: '2024-08-17',
        },
      ]
    },
    {
      name: "田",
      dates: [
        // 拖地
        {
          title: '🧹',
          lastDate: '2024-08-10',
        },
        // 迪士尼乐园
        {
          title: '🎠',
          lastDate: '2024-07-28'
        },
        // 莫文蔚演唱会
        {
          title: '莫后演唱会',
          lastDate: '2024-07-27'
        }
      ]
    },
    {
      name: "未知",
      dates: [
      ]
    }
  ]

  const [today, setToday] = useState(dayjs());

  const {data} = useQWeather();

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`Tik tok.`)
      setToday(dayjs())
    }, 1000);

    return () => {
      console.log(`砸掉小闹钟 ${timer}`);
      clearInterval(timer);
    }
  })

  return (
    <main className="pb-[14px] px-[20px] w-screen h-screen border-b-8 border-orange-800	
    font-[poppins-simi] relative overflow-auto">
      <Dates today={today} />
      <Weather weather={data} today={today} />
      <Divider />
      <DatesGroups datesGroups={datesGroups} today={today} />
      <ProgressBarByYear />
    </main>
  );
}
