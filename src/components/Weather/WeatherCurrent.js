import React from 'react';
import { BsSun, BsCloudFog2Fill, BsCloudyFill, BsFillCloudSunFill } from "react-icons/bs";

const WeatherCurrent = ({ currentData, data, city }) => {

    const weatherIcon = () => {
        switch (currentData.description) {
            case "couvert":
                return <BsCloudyFill className='text-9xl text-gray-500 self-center justify-self-center' />
            case "brouillard":
                return <BsCloudFog2Fill className='text-9xl text-gray-500 self-center justify-self-center' />
            case 'nuageux': 
                return <BsCloudyFill className='text-9xl text-gray-500 self-center justify-self-center' />
            case 'partiellement nuageux':
                return <BsFillCloudSunFill className='text-9xl text-amber-400 self-center justify-self-center' />
            case "peu nuageux":
                return <BsFillCloudSunFill className='text-9xl text-amber-400 self-center justify-self-center' />
            case "ciel dégagé":
                return <BsSun className='text-9xl text-amber-400 self-center justify-self-center' />
            default:
        }
    }

    return (
        <div className='m-10 grid grid-cols-2'>
            {weatherIcon()}
            {/* <BsSun className='text-9xl text-amber-400 self-center justify-self-center' /> */}
            {/* <BsCloudFog2Fill className='text-9xl text-gray-500 self-center justify-self-center' /> */}
            {/* <BsCloudyFill className='text-9xl text-gray-500 self-center justify-self-center' /> */}
            {/* <BsFillCloudSunFill className='text-9xl text-amber-400 self-center justify-self-center' /> */}
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