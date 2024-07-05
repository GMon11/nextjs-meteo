import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

import {
  getCoordFromCity,
  getCurrentWeather,
  getWeatherDaily,
  getWeatherHourly,
} from "@/lib/meteo";
import Router from "next/router";
import { CurrentWeather } from "@/typings/currentWeather";
import { DailyWeather } from "@/typings/dailyWeather";
import SearchBar from "@/components/searchBar/searchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  hourlyWeather,
  currentWeather,
  dailyWeather,
}: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const city = formData.get("city");

    Router.push(`/?city=${city}`);
  };

  return (

    <>

      <div className={styles.description}>
        <SearchBar />

      </div>

      <div className={styles.weatherContainer}>
        <div className={styles.background} />
        <div className={styles.currentWeather}>
          <h2>Current weather</h2>
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
  try {
    if (!query?.city) {
      query = {
        city: "roma",
      };
    }

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
    props: { hourlyWeather, dailyWeather, currentWeather },
  };
}
