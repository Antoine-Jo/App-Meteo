import React from 'react';

const WeatherCurrent = ({ currentData, data, city }) => {


    return (
        <div className='m-10 grid grid-cols-2'>
            <img src={`./ressources/jour/${currentData.icon}.svg`} className='w-56 self-center justify-self-center' alt="logo du temps qu'il fait" />
            <div className='self-center justify-self-center text-4xl'>
                <p className='first-letter:capitalize'>{currentData.description}</p>
                <p>{`${Math.trunc(data.temp)}°`}</p>
                <p>{city.name}</p>
            </div>
        </div>
    );
};
// {data.main.temp}
export default WeatherCurrent;