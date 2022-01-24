import React from 'react';

const Header = () => {
    return (
        <div className='h-auto flex flex-col'>
            <h1 className='text-white text-center mt-6 text-3xl font-bold'>Bienvenue sur l'App-Meteo</h1>
            <ul className='flex justify-around mt-5 text-white'>
                <li className='border p-3 rounded-lg cursor-pointer hover:bg-sky-700'>Home</li>
                <li className='border p-3 rounded-lg cursor-pointer hover:bg-sky-700'>Favoris</li>
            </ul>
            <hr className='mt-6'/>
        </div>
    );
};

export default Header;