import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({ info }) {
    // Debug: log the info passed to the component
    console.log("InfoBox received info:", info);

    if (!info) {
        return (
            <div className="info-box">
                <h3>Weather Information</h3>
                <p>No data available. Please search for a city.</p>
            </div>
        );
    }
    return (
        <div className="info-box">
            <h3>Weather Information</h3>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={info.icon}
                        alt={info.weather || "weather icon"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Weather: {info.weather} <br />
                            Temperature: {info.temp}°C <br />
                            Humidity: {info.humidity}% <br />
                            Wind Speed: {info.wind} kph <br />
                            AQI : {info.aqi} ({info.aqiText}) <br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
