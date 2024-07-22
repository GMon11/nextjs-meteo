export const getTemperatureIcon = (temperature: string) => {
    let path = ''

    const tempFloat = parseFloat(temperature)
    if (tempFloat < 15) {
        path = '/coldIcon.svg'

    } else if (tempFloat >= 15 && tempFloat < 28) {
        path = '/mediumTempIcon.svg'
    } else {
        path = "/hotIcon.svg"
    }

    return path

}

export const getRainIcon = (rain: string) => {


    let path = ''

    const rainFloat = parseFloat(rain)


    if (rainFloat <= 0) {
        path = '/sunnyIcon.svg'

    } else if (rainFloat > 0 && rainFloat < 0.5) {
        path = '/cloudyIcon.svg'
    } else {
        path = "/rainIcon.svg"
    }

    return path

}

export async function wait(time: number = 500): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    })
}