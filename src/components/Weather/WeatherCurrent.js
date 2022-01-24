import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsSun } from "react-icons/bs";

const WeatherCurrent = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4'


        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=Cannes,fr&appid=${CLEFAPI}&lang=fr`)
        .then((res) => {
            setWeatherData(res.data)
            console.log(weatherData.weather[0]);
        })
    }, [])

    return (
        <div className='m-10 grid grid-cols-2'>
            <BsSun className='text-9xl text-amber-400 self-center justify-self-center' />
            <div className='self-center justify-self-center text-4xl'>
                <p className='first-letter:capitalize'>{weatherData.weather[0].description}</p>
                <p>{weatherData.main.temp}</p>
                <p>{weatherData.name}</p>
            </div>
        </div>
    );
};

export default WeatherCurrent;