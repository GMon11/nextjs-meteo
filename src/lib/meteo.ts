import { DailyWeather } from "@/typings/dailyWeather";
import { wait } from "./common";
import { CurrentWeather } from "@/typings/currentWeather";
import { HourlyWeather } from "@/typings/hourlyWeather";

export async function getWeatherData(city: string) {

  console.log("city:", city)


  try {

    let coordinates = await getCoordFromCity(city)

    let dailyWeather: DailyWeather = await getWeatherDaily(
      coordinates.results[0]?.latitude?.toString(),
      coordinates.results[0]?.longitude?.toString()
    );

    let hourlyWeather: HourlyWeather = await getWeatherHourly(
      coordinates.results[0]?.latitude?.toString(),
      coordinates.results[0]?.longitude?.toString()
    );

    let currentWeather: CurrentWeather = await getCurrentWeather(
      coordinates.results[0]?.latitude?.toString(),
      coordinates.results[0]?.longitude?.toString()
    );

    const data = {
      dailyWeather: dailyWeather, hourlyWeather: hourlyWeather, currentWeather: currentWeather
    }
    return data
  } catch (error) {

    console.log("error:", error)



    throw new Error('Fetching weather data from external API')
  }

}



export async function getWeatherHourly(lat: string, lng: string) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain&forecast_days=3`
  );
  const data = await res.json();
  let newData = {
    elevation: data.elevation,
  };

  return data;
}

export async function getWeatherDaily(lat: string, lng: string) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum`
  );
  const data = await res.json();
  let newData = {
    elevation: data.elevation,
  };

  return data;
}

export async function getCurrentWeather(lat: string, lng: string) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,wind_speed_10m`
  );
  const data = await res.json();
  let newData = {
    elevation: data.elevation,
  };

  return data;
}

export async function getCoordFromCity(city: string) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
  );
  const data = await res.json();

  await wait(2000)
  if (!data?.results?.length || data?.results?.length == 0) {
    console.log(" ");
    console.log("hola");

    throw new Error("#notValidCity");
  }

  return data;
}
