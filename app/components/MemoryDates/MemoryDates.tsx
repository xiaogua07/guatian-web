function MemoryDates() {
  return (
    <div className="flex space-x-4 mt-[28px]">
      <div className="p-[16px] bg-zinc-600 flex-1 relative rounded-[16px] ">
        <div className="absolute top-[-16px] left-[-12px]">
          瓜
        </div>

        <div className="flex items-center">
          💇🏻
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
          🛏️
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
          💇🏻
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
          🛏
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
          🧹
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
  )
}

export default MemoryDates;