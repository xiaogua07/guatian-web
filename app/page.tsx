'use client'

import Dates from "./components/Dates";
import Building from "./components/Building";
import Divider from "./components/Divider";
import { useEffect, useState } from "react";
import DatesGroups, { DatesGroup } from "./components/DatesGroups/DatesGroups";
import ProgressBarByYear from "./components/ProgressBarByYear";

export default function Home() {
  // 使用useState创建一个状态，用于触发组件重新渲染
  const [refreshCount, setRefreshCount] = useState(0);

  // useEffect的第一个参数是effect回调函数，第二个参数是依赖数组
  // 空依赖数组[]表示这个effect只在组件挂载和卸载时执行
  // 但为了每10分钟刷新一次，我们实际上不需要依赖数组
  useEffect(() => {
    // 设置一个定时器，每10分钟执行一次
    const intervalId = setInterval(() => {
      // 更新状态以触发组件重新渲染
      setRefreshCount(prevCount => prevCount + 1);
    }, 15 * 60 * 1000); // 10分钟的毫秒数
    // }, 500); // 10分钟的毫秒数

    // 返回一个清理函数，当组件卸载时清除定时器，防止内存泄漏
    return () => {
      clearInterval(intervalId);
    };
  }, []); // 注意：这里没有依赖项，意味着该effect只运行一次（在组件挂载时）

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

  return (
    <main className="pt-[20px] px-[20px] w-screen h-screen border-8 border-orange-800	font-[poppins-simi] relative ">
      <Dates />
      <div className="text-[16px]">
        🎈 正在跟管理气象的神仙请教中
      </div>
      <Divider />
      <DatesGroups datesGroups={datesGroups} />
      <ProgressBarByYear />
    </main>
  );
}
