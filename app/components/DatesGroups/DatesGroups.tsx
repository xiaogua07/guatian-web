'use client'

import DatesGroupItem from './DatesGroupItem'

export interface OneDate {
  title: string,
  lastDate: string
}
export interface DatesGroup {
  name: string
  dates: OneDate[]
}
interface Props {
  datesGroups: DatesGroup[]
}

const DatesGroups: React.FC<Props> = ({
  datesGroups
}) => {

  return (
    <div className="flex space-x-4 mt-[28px]">
      {
        datesGroups.map((datesGroup, index) => {
          return (
            <DatesGroupItem datesGroup={datesGroup} key={index} />
          )
        })
      }
    </div>
  )
}

export default DatesGroups;