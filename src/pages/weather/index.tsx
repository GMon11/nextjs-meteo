import SearchBar from "@/components/searchBar/searchBar";
import CurrentWeather_Component from "@/components/weather/currentWeather/CurrentWeather";
import DailyWeather_Component from "@/components/weather/dailyWeather/DailyWeather";
import HourlyWeather_Component from "@/components/weather/hourlyWeather/HourlyWeather";
import { getCoordFromCity, getWeatherData } from "@/lib/meteo";

import styles from '@/styles/Home.module.css'

import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function WeatherPage({ query }: any) {

    console.log("params:", query)

    const city = query?.city ?? 'roma'

    const [currentCity, setCurrentCity] = useState(city)

    const [isLoading, setIsLoading] = useState<any>(false)
    const [data, setData] = useState<any>(undefined)

    if (city != currentCity) {
        setCurrentCity(city)
        console.log("updated city");

        setData(undefined)

    }

    if (!isLoading && !data) {

        setIsLoading(true);

        getWeatherData(city).then((res: any) => {
            setData(res)
            setIsLoading(false)

        })



    }


    if (true) {
        return (
            <section>
                <article className='item'>
                    <div className='item-img'>
                        <Skeleton width={250} height={35} />
                        <div style={{height:"1rem"}}></div>
                    </div>
                    <div className='item-info'>
                        <Skeleton width="100%" height="50rem" />
                        
                    </div>
                </article>
            </section>
        );

    }


    return (
        <>

            <div className={styles.description}>
                <SearchBar redirectPage='weather' />
            </div>

            <div className={styles.weatherContainer}>

                <div className={styles.weatherWrapper}>

                    <div className={styles.cityLabel}>
                        Weather of {city.toUpperCase()}
                    </div>

                    <div className={styles.currentWeather}>
                        <CurrentWeather_Component
                            temperature={data?.currentWeather?.current?.apparent_temperature}
                            rainMM={data?.currentWeather?.current?.rain}
                            windSpeed={data?.currentWeather?.current?.wind_speed_10m}
                        />
                    </div>

                    <div className={styles.dailyWeather}>
                        <DailyWeather_Component dailyData={data?.dailyWeather.daily} />
                    </div>

                    <div className={styles.hourlyWeather}>
                        <HourlyWeather_Component hourlyData={data?.hourlyWeather.hourly} />
                    </div>

                </div>

            </div>

            <div className={styles.grid}>
            </div>


        </>
    )


}