import { Dayjs } from "dayjs"

interface MyProps {
    today: Dayjs
}
const MiniClock: React.FC<MyProps> = ({ today }) => {
    return (
        <div className="clock ">
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