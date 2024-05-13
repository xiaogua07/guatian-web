'use client'

import { Dayjs } from 'dayjs'
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
  today: Dayjs
}

const DatesGroups: React.FC<Props> = ({
  datesGroups, today
}) => {

  return (
    <div className="flex sm:space-x-4 flex-col sm:flex-row">
      {
        datesGroups.map((datesGroup, index) => {
          return (
            <DatesGroupItem datesGroup={datesGroup} key={index} today={today} />
          )
        })
      }
    </div>
  )
}

export default DatesGroups;