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
        return getDiffDays(oneDate.lastDate) 
    }, [today, oneDate])

    return (
        <div className="flex items-center">
            <div className='text-[30px] w-[30px] h-[30px] leading-4'>{oneDate.title}</div>
            <div className="flex items-center">
                <div className=" ml-[12px] mr-[4px] text-[20px] text-red	font-bold text-[20px]">
                    {diffDays}
                </div>
                <div className='text-[16px] font-bold'>天</div>
            </div>
        </div>
    )
}

export default DateItem