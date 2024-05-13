import { Dayjs } from "dayjs"

interface MyProps {
    today: Dayjs
}
const MiniClock: React.FC<MyProps> = ({ today }) => {
    return (
        <div className="absolute right-[15px] clock w-[70px] h-[70px] rounded-full
        bg-clock-bg "
        style={{
            boxShadow: `0 -8px 8px rgba(0, 0, 0, 0.3) inset,
            0 4px 8px rgba(255, 255, 255, 0.1) inset,
            0 -4px 8px rgba(255, 255, 255, 0.2),
            0 8px 8px rgba(0, 0, 0, 0.3)`
        }}
        >
            <div className="hour">
                <div className="hour-pointer"></div>
            </div>
            <div className="minitue">
                <div className="minitue-pointer"></div>
            </div>
            <div className="second">
                <div className="second-pointer"></div>
            </div>
        </div>
    )
}

export default MiniClock;