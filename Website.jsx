import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function Website() {
    const [weatherData, setWeatherData] = useState(null);
    let updateWeatherData = (info) => {
        setWeatherData(info);
    }
    return (
        <div>
            <SearchBox updateWeatherData={updateWeatherData} />
            <InfoBox info = {weatherData}/>
        </div>
    );
}