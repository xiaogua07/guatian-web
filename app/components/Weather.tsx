import { QWeatherResInterface } from "../hooks/useQWeather";

interface MyProps {
  weather: QWeatherResInterface
}
const Weather: React.FC<MyProps> = ({ weather }) => {
  return (
    <div className="text-[24px] leading-4 mt-[12px] flex flex-wrap space-x-[16px]">
      <div className="flex">
        <div>{}</div>
        <div>{weather?.daily[0].textDay}</div>
      </div>
      <div className="flex">
        <div>{}</div>
        <div className="flex">
          <div>{weather?.daily[0].tempMin}°</div>
          - <div>{weather?.daily[0].tempMax}°</div>
        </div>
      </div>
      <div className="flex">
        <div>{}</div>
        <div className="flex">
          <div>{weather?.daily[0].sunrise}</div>
          - <div>{weather?.daily[0].sunset}</div>
        </div>
      </div>
    </div>
  )
}

export default Weather;