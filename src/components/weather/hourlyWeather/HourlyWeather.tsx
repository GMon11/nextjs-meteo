import { useState } from 'react';
import styles from './HourlyWeather.module.css';
import Image from 'next/image';
import { getIcon, getRainIcon, getTemperatureIcon } from '@/lib/common';


interface Props {
    dailyData: any
}

const HourlyWeather_Component: StorefrontFunctionComponent<Props> = ({
    hourlyData
}) => {

    const [dataToShow, setDataToShow] = useState<any>()

    console.log("dataToShow:", dataToShow)


    let times = hourlyData.time

    let dayDatas: any = []

    for (let i = 0; i < times.length; i++) {

        const dayData = {
            time: times[i],
            temperature_2m: hourlyData.temperature_2m[i],
            rain_sum: hourlyData.rain[i]
        }
        let day = times[i].split("T")[0]

        let dayFromObj = dayDatas.find((f: any) => f.day == day)

        if (!dayFromObj) {
            dayDatas.push({
                day: day,
                data: [dayData]
            })
        } else {
            dayFromObj.data.push(dayData)
        }

    }


    const handleChangeDay = (e: any) => {
        e.preventDefault();

        let dataToShow = dayDatas[e.target.id]
        setDataToShow(dataToShow)

    }



    return (

        <div className={styles.dailyWeatherContainer}>

            <h2>Hourly</h2>

            <div className={styles.btnContainer}>
                {
                    dayDatas.map((val: any, index: any) => {

                        let buttonLabel = val.day
                        if (index == 0) {
                            buttonLabel = "Today"
                        } else if (index == 1) {
                            buttonLabel = "Tomorrow"
                        }

                        return (
                            <button onClick={handleChangeDay} id={index} className={styles.btnDay}>{buttonLabel}</button>
                        )

                    })
                }
            </div>


            {
                dataToShow?.data ?

                    <div className={styles.tableWrapper}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Hour server123456</th>
                                    <th>Temperature</th>
                                    <th>Rain mm</th>
                                </tr>


                                {
                                    (dataToShow.data.map((val: any, key: any) => {
                                        return (
                                            <tr key={key}>
                                                <td>{val.time.split("T")[1]}</td>
                                                <td>{val.temperature_2m} <Image alt='hot' src={getTemperatureIcon(val.temperature_2m)} width={35} height={30} /></td>
                                                <td>{val.rain_sum} <Image alt='rain' src={getRainIcon(val.rain_sum)} width={35} height={30} /></td>
                                            </tr>
                                        )
                                    }))}

                            </tbody>
                        </table>
                    </div>

                    : (
                        <div>
                            Select a button
                        </div>
                    )
            }



        </div >


    )
}

export default HourlyWeather_Component