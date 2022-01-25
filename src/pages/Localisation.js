import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import Card from '../components/Card';
import Header from '../components/Header/Header';

const Localisation = () => {
    const [modal, setModal] = useState(false);
    const [currentData, setCurrentData] = useState([]);
    const [data, setData] = useState('');
    const [city, setCity] = useState('');

    const handleWeather = (e) => {
        e.preventDefault();
        setModal(true)
        const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4'
        axios
        .get(`https://api.openweathermap.org/data/2.5/find?lat=43.5504&lon=7.0131&cnt=5&units=metric&appid=${CLEFAPI}&lang=FR`)
        .then((res) => {
            setCurrentData(res.data.list[0].weather[0])
            setData(res.data.list[0].main)
            setCity(res.data.list[0])
            console.log(res.data.list[0].weather[0]);
        })
    }

    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <button className='text-white border p-2 mt-10 rounded-lg hover:scale-110' onClick={handleWeather} >Activer la localisation</button>
            </div>
            <div className='flex flex-col m-auto mt-10 w-6/12 text-white border'>
                {modal && <Card currentData={currentData} data={data} city={city} />}
            </div>
        </div>
    );
};

export default Localisation;