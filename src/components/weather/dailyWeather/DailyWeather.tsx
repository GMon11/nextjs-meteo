import { getRainIcon, getTemperatureIcon } from '@/lib/common';
import Image from 'next/image';
import styles from './DailyWeather.module.css';


interface Props {
    dailyData: any
}

const DailyWeather_Component: StorefrontFunctionComponent<Props> = ({
    dailyData
}) => {

    let times = dailyData.time;
    let formattedData: any[] = []

    for (let i = 0; i < times.length; i++) {
        const dayData = {
            time: times[i],
            temperature_2m_max: dailyData.temperature_2m_max[i],
            temperature_2m_min: dailyData.temperature_2m_min[i],
            rain_sum: dailyData.rain_sum[i]
        }
        formattedData.push(dayData)
    }

    return (
        <>
            <div className={styles.dailyWeatherContainer}>

                <h2>Daily</h2>

                <div className={styles.tableWrapper}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Data</th>
                                <th>Temperature Max</th>
                                <th>Temperature Min</th>
                                <th>Rain mm</th>
                            </tr>

                            {formattedData.map((val: any, key: any) => {
                                return (

                                    <tr key={key}>
                                        <td>{val.time}</td>
                                        <td>{val.temperature_2m_max} <Image alt='hot' src={getTemperatureIcon(val.temperature_2m)} width={35} height={30} /></td>
                                        <td>{val.temperature_2m_min} <Image alt='hot' src={getTemperatureIcon(val.temperature_2m)} width={35} height={30} /></td>
                                        <td>{val.rain_sum} <Image alt='rain' src={getRainIcon(val.rain_sum)} width={35} height={30} /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default DailyWeather_Component