import styles from './DailyWeather.module.css';


interface Props {

}

const DailyWeather_Component: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.dailyWeatherContainer}>

                <h2>Daily Weather</h2>

            </div>

        </>
    )
}

export default DailyWeather_Component