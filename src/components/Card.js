import React from 'react';
import WeatherCurrent from './Weather/WeatherCurrent';


const Card = () => {
    return (
        <div className='flex flex-col m-auto mt-10 w-6/12 text-white border'>
            <h1 className='text-3xl text-center p-7 border-b w-full'>Application météo</h1>
            <WeatherCurrent />
        </div>
    );
};

export default Card;