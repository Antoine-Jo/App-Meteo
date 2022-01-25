import React from 'react';
import WeatherCurrent from './Weather/WeatherCurrent';


const Card = ({ currentData, data, city }) => {
    return (
        <div>
            <h1 className='text-3xl text-center p-7 border-b w-full'>Application météo</h1>
            <WeatherCurrent currentData={currentData} data={data} city={city} />
            {/* <HourlyWeather />
            <DailyWeather /> */}
        </div>
    );
};

export default Card;