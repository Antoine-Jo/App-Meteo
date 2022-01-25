import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import DailyWeather from './Weather/DailyWeather';
import HourlyWeather from './Weather/HourlyWeather';
import WeatherCurrent from './Weather/WeatherCurrent';


const Card = () => {
    const [currentData, setCurrentData] = useState([]);
    const [data, setData] = useState('')
    const [city, setCity] = useState("")

    useEffect(() => {
        const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4'


        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=nice,fr&units=metric&appid=${CLEFAPI}&lang=fr`)
        .then((res) => {
            setCurrentData(res.data.weather[0])
            setData(res.data.main)
            setCity(res.data)
            console.log(res.data);
        })
    }, [])



    return (
        <div className='flex flex-col m-auto mt-10 w-6/12 text-white border'>
            <h1 className='text-3xl text-center p-7 border-b w-full'>Application météo</h1>
            <WeatherCurrent currentData={currentData} data={data} city={city} />
            <HourlyWeather />
            <DailyWeather />
        </div>
    );
};

export default Card;