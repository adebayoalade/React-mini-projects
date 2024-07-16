import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherDetails = () => {
    const {data, loading} = useContext(WeatherContext);

    if(loading) {
        return ( <div>
        <p>loading...</p>
        </div>
    );  
    }
    if (!data) {
     console.log("no data available");
     return (
        <div>
            No Data Available
        </div>
     );
    }
    console.log("Data Recieved:", data)
    const {location, current} = data;
    const {name, region, country, localtime, tz_id} = location;
    const {temp_c, temp_f, condition, wind_mph, wind_dir, humidity, uv} = current;
    const {text, code} = condition;
    return (
      <div>
        <h1>Weather Details</h1>
        <p><strong>Location</strong>: {name}, {region}, {country}, {tz_id},</p>
        <p><strong>Local time</strong> {localtime},</p>
        <p><strong>Temperature</strong> {temp_c}Celcius / {temp_f}Fah,</p>
      </div>
   );
 };



export default WeatherDetails