import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateWeatherData}) {
    let [city, setCity] = useState("");
    let [error,seterror] = useState(false);
    const URL = "https://api.weatherapi.com/v1/current.json?key=8e42cf97ed5d4f4081e81733252104";
    let getWeatherInfo = async () => {
        try{
            let response  = await fetch(`${URL}&q=${city}&aqi=yes`);
            let data = await response.json();
            let result = {
                temp : data.current.temp_c,
                humidity : data.current.humidity,
                wind : data.current.wind_kph,
                city : data.location.name,
                country : data.location.country,
                icon : data.current.condition.icon,
                weather : data.current.condition.text,  
                aqi : data.current.air_quality["us-epa-index"],
                aqiText : data.current.air_quality["us-epa-index"] === 1 ? "Good" : data.current.air_quality["us-epa-index"] === 2 ? "Moderate" : data.current.air_quality["us-epa-index"] === 3 ? "Unhealthy for Sensitive Groups" : data.current.air_quality["us-epa-index"] === 4 ? "Unhealthy" : data.current.air_quality["us-epa-index"] === 5 ? "Very Unhealthy" : "Hazardous" 
            }
            console.log(result);
            return result;
        }
        catch(error){
            throw new Error(error);
        }
    };
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateWeatherData(info);
        }
        catch(error){
            console.log(error);
            seterror(true);
        }
    }
    return (    
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" size="small"  required value={city} onChange={handleChange}/>
                <br/>
                <br/>
                <Button variant="contained" color="primary" type="submit">Search</Button>
                {error && <p className="error" style={{color:"red",fontWeight:"bold"}}>Please enter a valid city name</p>}
                <br/>
            </form>
        </div>
    )
}