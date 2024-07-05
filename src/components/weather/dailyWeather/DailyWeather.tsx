import styles from './DailyWeather.module.css';


interface Props {

}

const DailyWeather: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.dailyWeatherContainer}>

                <h2>Daily Weather</h2>

            </div>

        </>
    )
}

export default DailyWeather