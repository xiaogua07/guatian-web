'use client'

import Dates from "./components/Dates";
import Divider from "./components/Divider";
import { useEffect, useState } from "react";
import DatesGroups, { DatesGroup } from "./components/DatesGroups/DatesGroups";
import ProgressBarByYear from "./components/ProgressBarByYear";
import TestComponent from "./components/TestComponent";
import dayjs from "dayjs";

export default function Home() {

  const datesGroups:  DatesGroup[] = [
    {
      name: "瓜",
      dates: [
        // 理发
        {
          title:  '💇🏻',
          lastDate: '2024-04-16',
        },
        // 换床单
        {
          title:  '🛏️',
          lastDate: '2024-04-06',
        },
      ]
    },
    {
      name: "陆",
      dates: [
        // 理发
        {
          title:  '💇🏻',
          lastDate: '2024-05-03',
        },
        // 换床单
        {
          title:  '🛏️',
          lastDate: '2024-05-03',
        },
      ]
    },
    {
      name: "田",
      dates: [
        // 拖地
        {
          title: '🧹',
          lastDate: '2024-05-04',
        },
        // 迪士尼乐园
        {
          title: '🎠',
          lastDate: '2024-05-25'
        }
      ]
    }
  ]

  const [today, setToday] = useState(dayjs());

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
    <main className="py-[14px] px-[20px] w-screen h-screen border-b-8 border-orange-800	
    font-[poppins-simi] relative overflow-auto">
      <Dates today={today} />
      <div className="text-[16px]">
        🎈 正在跟管理气象的神仙请教中
      </div>
      <Divider />
      <DatesGroups datesGroups={datesGroups} today={today} />
      <ProgressBarByYear />
    </main>
  );
}
