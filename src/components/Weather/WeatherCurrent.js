import React from 'react';
import { BsSun } from "react-icons/bs";

const WeatherCurrent = () => {
    return (
        <div className='m-10 grid grid-cols-2'>
            <BsSun className='text-9xl text-amber-400 self-center justify-self-center' />
            <div className='self-center justify-self-center text-4xl'>
                <p>Ciel dégagé</p>
                <p>13°</p>
                <p>Cannes</p>
            </div>
        </div>
    );
};

export default WeatherCurrent;