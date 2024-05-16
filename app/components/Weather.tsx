import { useMemo } from "react";
import { QWeatherResInterface } from "../hooks/useQWeather";
import dayjs, { Dayjs } from "dayjs";

interface MyProps {
  today: Dayjs
  weather: QWeatherResInterface | null
}
const Weather: React.FC<MyProps> = ({ weather, today }) => {

  const dayWeather = useMemo(() => {
    return weather?.daily[0];
  }, [weather])
  const sunsetMinute = useMemo(() => {
    if (dayWeather?.sunset?.split(':')) {
      return parseInt((dayWeather?.sunset?.split(':') as string[])[1]);
    }
    return 0;
  }, [dayWeather]);

  const sunsetHour = useMemo(() => {
    if (dayWeather?.sunset?.split(':')) {
      return parseInt((dayWeather?.sunset?.split(':') as string[])[0]);
    } 
    return 0
  }, [dayWeather]);

  const sunsetDay = useMemo(() => {
    return dayjs().hour(sunsetHour).minute(sunsetMinute);
  }, [dayWeather])

  const sunriseMinute = useMemo(() => {
    if (dayWeather?.sunrise?.split(':')) {
      return parseInt((dayWeather?.sunrise?.split(':') as string[])[1]);
    }
    return 0;
  }, [dayWeather]);

  const sunriseHour = useMemo(() => {
    if (dayWeather?.sunrise?.split(':')) {
      return parseInt((dayWeather?.sunrise?.split(':') as string[])[0]);
    } 
    return 0
  }, [dayWeather]);

  const sunriseDay = useMemo(() => {
    return dayjs().hour(sunriseHour).minute(sunriseMinute);
  }, [dayWeather])
  const sunStatus = useMemo(() => {
    return today.isBefore(sunriseDay) ? 'night' : 'day';
  },[dayWeather])

  const dayComponents = () => {
    return (
      <div className="text-[24px] leading-4 mt-[12px] flex flex-wrap space-x-[16px]">
        <div className="flex">
          <div>
            <i className={`qi-${dayWeather?.iconDay}`}></i>
          </div>
          <div className="ml-[5px]">{dayWeather?.textDay}</div>
        </div>
        <div className="flex">
          <div>
            🌡️
          </div>
          <div className="flex ml-[5px]">
            <div>{dayWeather?.tempMin}°</div>
            - <div>{dayWeather?.tempMax}°</div>
          </div>
        </div>
        <div className="flex">
          <div>☀️</div>
          <div className="flex ml-[5px]">
            <div>{dayWeather?.sunrise}</div>
            - <div>{dayWeather?.sunset}</div>
          </div>
        </div>
      </div>
    )
  }
  const nightComponents = () => {
    return (
      <div className="text-[24px] leading-4 mt-[12px] flex flex-wrap space-x-[16px]">
        <div className="flex">
          <div>
            <i className={`qi-${dayWeather?.iconNight}`}></i>
          </div>
          <div className="ml-[5px]">{dayWeather?.textNight}</div>
        </div>
        <div className="flex">
          <div>🌔</div>
          <div className="flex ml-[5px]">
            <div>{dayWeather?.moonrise}</div>
            - <div>{dayWeather?.moonset}</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <i className={`qi-${dayWeather?.iconNight}`}></i>
          </div>
          <div className="flex ml-[5px]">{dayWeather?.moonPhase}</div>
        </div>
      </div>
    )
  }
  return (
    <>
      {
        ('night' === sunStatus)
          ? nightComponents() : dayComponents()
      }
    </>

  )
}

export default Weather;