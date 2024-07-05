export interface HourlyWeather {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    hourly_units:          HourlyUnits;
    hourly:                Hourly;
}

export interface Hourly {
    time:                      string[];
    temperature_2m:            number[];
    apparent_temperature:      number[];
    precipitation_probability: number[];
    rain:                      number[];
}

export interface HourlyUnits {
    time:                      string;
    temperature_2m:            string;
    apparent_temperature:      string;
    precipitation_probability: string;
    rain:                      string;
}
