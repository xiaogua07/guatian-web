import { Dayjs } from "dayjs"
import { useMemo } from "react"

interface MyProps {
    today: Dayjs
}
const MiniClock: React.FC<MyProps> = ({ today }) => {
    const rotateSecond = useMemo(() => {
        return `rotateZ(${today.second() * 6}deg)` 
    }, [today]);
    const rotateMinute = useMemo(() => {
        return `rotateZ(${today.minute() * 6}deg)` 
    }, [today]);
    const rotateHour = useMemo(() => {
        return `rotateZ(${today.hour() * 30 + today.minute() / 2}deg)` 
    }, [today, rotateMinute]);


    return (
        <div className="absolute right-[22px] top-[60px] clock w-[70px] h-[70px] rounded-full
        bg-clock-bg flex justify-center items-center "
        style={{
            boxShadow: `0 -8px 8px rgba(0, 0, 0, 0.3) inset,
            0 4px 8px rgba(255, 255, 255, 0.1) inset,
            0 -4px 8px rgba(255, 255, 255, 0.2),
            0 8px 8px rgba(0, 0, 0, 0.3)`
        }}
        >
            <div className="hour absolute w-[32px] h-[32px]  flex justify-center items-center">
                <div style={{ transform: rotateHour }}
                 className="hour-pointer  w-[32px] h-[32px] "></div>
            </div>
            <div style={{ transform: rotateMinute }}
            className="minitue absolute w-[38px] h-[38px]  flex justify-center items-center">
                <div className="minitue-pointer  w-[32px] h-[32px]"></div>
            </div>
            <div style={{ transform: rotateSecond }}
                className="second absolute w-[46px] h-[46px]  flex justify-center items-center ">
                <div className="second-pointer  w-[32px] h-[32px]"></div>
            </div>
        </div>
    )
}

export default MiniClock;