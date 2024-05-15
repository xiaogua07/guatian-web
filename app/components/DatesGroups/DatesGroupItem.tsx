'use client'

import { Dayjs } from 'dayjs'
import DateItem from './DateItem'
import { DatesGroup } from './DatesGroups'


interface Props {
    datesGroup: DatesGroup,
    today: Dayjs
}

const DatesGroupItem: React.FC<Props> = ({
    datesGroup, today
}) => {
    return (
        <div className="p-[16px] bg-gray flex-1 relative rounded-[16px] mt-[28px] space-y-[12px]">
            <div className="absolute bottom-[-4px] left-[-12px] font-bold">
                {datesGroup.name}
            </div>
            {
                datesGroup.dates.map((oneDate, index) => {
                    return (
                        <DateItem oneDate={oneDate} key={index} today={today} />
                    )
                })
            }
        </div>
    )
}

export default DatesGroupItem;