'use client'

import dayjs, { Dayjs } from 'dayjs'
import { OneDate } from './DatesGroups'
import useIntervalUpdate from '@/app/hooks/useIntervalUpdate'
import { useMemo } from 'react'


interface Props {
    oneDate: OneDate
    today: Dayjs
}

const DateItem: React.FC<Props> = ({
    oneDate, today
}) => {

    const getDiffDays = (date: string) => {
        // 定义目标日期
        const targetDate = dayjs(date);

        // 计算两个日期之间的自然日差值，忽略时间部分
        const daysDifference = Math.abs(today.diff(targetDate, 'day'));
        return daysDifference;
    }

    const diffDays = useMemo(() => { 
        console.log(`Heart beat!`);
        return getDiffDays(oneDate.lastDate) 
    }, [today, oneDate])

    return (
        <div className="flex items-center">
            {oneDate.title}
            <div className="flex items-center">
                <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                    {diffDays}
                </div>
                <div>天</div>
            </div>
        </div>
    )
}

export default DateItem