import React from 'react';

const DailyWeather = () => {
    return (
        <div className='grid grid-cols-7'>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Lun</p>
                <p>12°</p>
            </div>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Mar</p>
                <p>12°</p>
            </div>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Mer</p>
                <p>12°</p>
            </div>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Jeu</p>
                <p>12°</p>
            </div>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Ven</p>
                <p>12°</p>
            </div>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Sam</p>
                <p>12°</p>
            </div>
            <div className='flex flex-col items-center border-t border-r text-2xl p-5'>
                <p>Dim</p>
                <p>12°</p>
            </div>
        </div>
    );
};

export default DailyWeather;