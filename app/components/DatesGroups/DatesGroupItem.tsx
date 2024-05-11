'use client'

import DateItem from './DateItem'
import { DatesGroup } from './DatesGroups'


interface Props {
    datesGroup: DatesGroup
}

const DatesGroupItem: React.FC<Props> = ({
    datesGroup
}) => {
    return (
        <div className="p-[16px] bg-zinc-600/[.6] flex-1 relative rounded-[16px] mt-[28px] ">
            <div className="absolute top-[-16px] left-[-12px]">
                {datesGroup.name}
            </div>
            {
                datesGroup.dates.map((oneDate, index) => {
                    return (
                        <DateItem oneDate={oneDate} key={index} />
                    )
                })
            }
        </div>
    )
}

export default DatesGroupItem;