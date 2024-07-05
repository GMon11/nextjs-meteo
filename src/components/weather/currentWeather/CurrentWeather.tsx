import styles from './CurrentWeather.module.css';


interface Props {

}

const CurrentWeather: StorefrontFunctionComponent<Props> = ({
}) => {
    return (
        <>
            <div className={styles.currentWeatherContainer}>

                <h2>
                    Current Weather
                </h2>

            </div>

        </>
    )
}

export default CurrentWeather