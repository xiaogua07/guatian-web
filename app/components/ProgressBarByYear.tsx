'use client'

import Image from 'next/image';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(isLeapYear)
dayjs.extend(dayOfYear)

const ProgressBarByYear = () => {
    function calculateYearProgress() {
        // 获取当前日期
        const currentDate = dayjs();

        // 判断今年是否为闰年
        const isThisYearLeap = dayjs(currentDate).isLeapYear();
        const totalDaysThisYear = isThisYearLeap ? 366 : 365;

        // 计算当前是今年的第几天
        const dayOfYear = currentDate.dayOfYear();

        // 计算已经过去的百分比
        const progressPercentage = (dayOfYear / totalDaysThisYear) * 100;

        return progressPercentage;
    }

    function calculateStylesLeft() {
        console.log( `${calculateYearProgress()}% - 16px`)
        return `calc(${calculateYearProgress()}% - 16px)`
    }

    return (
        <div className='fixed bottom-0 ' style={{ left: calculateStylesLeft() }}>
            <Image
                className=''
                src={'/run-mario.gif'} alt="run mario" width={32} height={100} />
        </div>
    )
}

export default ProgressBarByYear;