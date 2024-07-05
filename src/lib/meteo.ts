export async function getWeather(lat: string, lng: string) {
    // Fetch data from external API
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=rain&hourly=precipitation_probability&forecast_days=3`)
    const data = await res.json()

    let newData = {
        elevation: data.elevation,

    }

    return newData;
}

export async function getCoordFromCity(city: string) {

    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    const data = await res.json()

    console.log("data of city:", data)


    if(!data?.results?.length || data?.results?.length == 0){
        console.log(" ");
        console.log("hola");
        
        
        throw new Error("#notValidCity")
    }

    return data;

}