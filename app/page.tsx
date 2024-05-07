'use client'

import Dates from "./components/Dates";
import Building from "./components/Building";
import Divider from "./components/Divider";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

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

    // 返回一个清理函数，当组件卸载时清除定时器，防止内存泄漏
    return () => {
      clearInterval(intervalId);
    };
  }, []); // 注意：这里没有依赖项，意味着该effect只运行一次（在组件挂载时）

  const guaDates = {
    hairCutTime: "2024-04-16",
    bedSheetChangeTime: "2024-04-06"
  }

  const luDates = {
    hairCutTime: "2024-05-03",
    bedSheetChangeTime: "2024-05-03"
  }

  const guatianDates = {
    moppingFloorTime: "2024-05-04",
  }

  const getDiffDays = (date: string) => {
    // 获取今天的日期
    const today = dayjs();

    // 定义目标日期
    const targetDate = dayjs(date);

    // 计算两个日期之间的自然日差值，忽略时间部分
    const daysDifference = today.diff(targetDate, 'day');
    return daysDifference;
  }

  return (
    <main className="pt-[20px] px-[20px]">
      <Dates />

      <div className="text-[16px]">
        🎈 正在跟管理气象的神仙请教中
      </div>

      <Divider />
      <div className="flex space-x-4 mt-[28px]">
        <div className="p-[16px] bg-zinc-600 flex-1 relative rounded-[16px] ">
          <div className="absolute top-[-16px] left-[-12px]">
            瓜
          </div>

          <div className="flex items-center">
            <svg className="icon text-[32px]" aria-hidden="true">
              <use xlinkHref="#icon-lifa"></use>
            </svg>
            <div className="flex items-center">
              <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                {
                  getDiffDays(guaDates.hairCutTime)
                }
              </div>
              <div>天</div>
            </div>
          </div>

          <div className="flex items-center">
            <svg className="icon text-[32px]" aria-hidden="true">
              <use xlinkHref="#icon-tubiao-82"></use>
            </svg>
            <div className="flex items-center">
              <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                {
                  getDiffDays(guaDates.bedSheetChangeTime)
                }
              </div>
              <div>天</div>
            </div>
          </div>
        </div>

        <div className="p-[16px] bg-zinc-600 flex-1 relative rounded-[16px] ">
          <div className="absolute top-[-16px] left-[-12px]">
            陆
          </div>

          <div className="flex items-center">
            <svg className="icon text-[32px]" aria-hidden="true">
              <use xlinkHref="#icon-lifa"></use>
            </svg>
            <div className="flex items-center">
              <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                {
                  getDiffDays(luDates.hairCutTime)
                }
              </div>
              <div>天</div>
            </div>
          </div>

          <div className="flex items-center">
            <svg className="icon text-[32px]" aria-hidden="true">
              <use xlinkHref="#icon-tubiao-82"></use>
            </svg>
            <div className="flex items-center">
              <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                {
                  getDiffDays(luDates.bedSheetChangeTime)
                }
              </div>
              <div>天</div>
            </div>
          </div>
        </div>

        <div className="p-[16px] bg-zinc-600 flex-1 relative rounded-[16px] ">
          <div className="absolute top-[-16px] left-[-12px]">
            田
          </div>

          <div className="flex items-center">
            <svg className="icon text-[32px]" aria-hidden="true">
              <use xlinkHref="#icon-housekeeper_female"></use>
            </svg>
            <div className="flex items-center">
              <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                {
                  getDiffDays(guatianDates.moppingFloorTime)
                }
              </div>
              <div>天</div>
            </div>
          </div>

        </div>

      </div>


      <Building />
    </main>
  );
}
