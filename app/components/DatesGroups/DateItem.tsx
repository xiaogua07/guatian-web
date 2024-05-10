'use client'

import dayjs from 'dayjs'
import { OneDate } from './DatesGroups'
import useIntervalUpdate from '@/app/hooks/useIntervalUpdate'


interface Props {
    oneDate: OneDate
}

const DateItem: React.FC<Props> = ({
    oneDate
}) => {

    const getDiffDays = (date: string) => {
        // 获取今天的日期
        const today = dayjs();

        // 定义目标日期
        const targetDate = dayjs(date);

        // 计算两个日期之间的自然日差值，忽略时间部分
        const daysDifference = Math.abs(today.diff(targetDate, 'day'));
        return daysDifference;
    }

    return (
        <div className="flex items-center">
            {oneDate.title}
            <div className="flex items-center">
                <div className=" mx-[12px] text-[36px] text-red-300	font-bold	">
                    {
                        getDiffDays(oneDate.lastDate)
                    }
                </div>
                <div>天</div>
            </div>
        </div>
    )
}

export default DateItem