import styles from './CurrentWeather.module.css';


interface Props {
    temperature: string,
    windSpeed: string,
    rainMM: string


}

const CurrentWeather_Component: StorefrontFunctionComponent<Props> = (
    {
        temperature,
        rainMM,
        windSpeed
    }
) => {

    return (
        <>
            <div className={styles.currentWeatherContainer}>

                <h2>
                    Current Weather
                </h2>
                <div style={{ margin: "15px", display: "flex" }}>
                    <p>Temperature: {temperature}</p>
                    <div style={{ paddingLeft: "1rem" }}></div>
                    <p>Rain mm: {rainMM}</p>
                    <div style={{ paddingLeft: "1rem" }}></div>
                    <p>Wind speed: {windSpeed}</p>
                </div>

            </div>

        </>
    )
}

export default CurrentWeather_Component