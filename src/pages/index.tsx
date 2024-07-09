import styles from "@/styles/Home.module.css";

import SearchBar from "@/components/searchBar/searchBar";
import CurrentWeather_Component from "@/components/weather/currentWeather/CurrentWeather";
import DailyWeather_Component from "@/components/weather/dailyWeather/DailyWeather";
import {
  getCoordFromCity,
  getCurrentWeather,
  getWeatherDaily,
  getWeatherHourly,
} from "@/lib/meteo";
import { CurrentWeather } from "@/typings/currentWeather";
import { DailyWeather } from "@/typings/dailyWeather";
import HourlyWeather_Component from "@/components/weather/hourlyWeather/HourlyWeather";
import Image from "next/image";


export default function Home({

  hourlyWeather,
  currentWeather,
  dailyWeather,
  city
}: any) {

  console.log("hourlyWeather:", hourlyWeather)


  return (

    <>

      <div className={styles.description}>
        <SearchBar />
      </div>

      <div className={styles.weatherContainer}>

        <div className={styles.weatherWrapper}>

          <div className={styles.cityLabel}>
            Weather of {city.toUpperCase()}
          </div>

          {(city == "bitonto" || city == "foggia"  || city == "cerignola")&& 
            ( <div style={{textAlign:"center"}}>
              
              <Image alt="f" src='/furto.jpg' width={500} height={300}></Image>
              </div>)
          }

          <div className={styles.currentWeather}>
            <CurrentWeather_Component
              temperature={currentWeather?.current?.apparent_temperature}
              rainMM={currentWeather?.current?.rain}
              windSpeed={currentWeather?.current?.wind_speed_10m}
            />
          </div>

          <div className={styles.dailyWeather}>
            <DailyWeather_Component dailyData={dailyWeather.daily}/>
          </div>

          <div className={styles.hourlyWeather}>
            <HourlyWeather_Component hourlyData={hourlyWeather.hourly}/>
          </div>
          
        </div>

      </div>

      <div className={styles.grid}>
      </div>

    </>
  );
}



// This gets called on every request
export async function getServerSideProps({ query }: any) {
  let dailyWeather: DailyWeather;
  let currentWeather: CurrentWeather;
  let hourlyWeather: DailyWeather;
  let error;
  let city: string;
  try {
    if (!query?.city) {
      query = {
        city: "roma",
      };
    }
    city = query.city

    let coordinates = await getCoordFromCity(query.city);
    hourlyWeather = await getWeatherHourly(
      coordinates.results[0]?.latitude?.toString(),
      coordinates.results[0]?.longitude?.toString()
    );
    dailyWeather = await getWeatherDaily(
      coordinates.results[0]?.latitude?.toString(),
      coordinates.results[0]?.longitude?.toString()
    );
    currentWeather = await getCurrentWeather(
      coordinates.results[0]?.latitude?.toString(),
      coordinates.results[0]?.longitude?.toString()
    );

  } catch (error) {
    error = error;
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return {
    props: { hourlyWeather, dailyWeather, currentWeather, city }

  };
}
