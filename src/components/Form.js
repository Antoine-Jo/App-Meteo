import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Card from './Card';

const Form = () => {
    const [currentData, setCurrentData] = useState([]);
    const [data, setData] = useState('');
    const [city, setCity] = useState("");
    const [search, setSearch] = useState('')

    useEffect(() => {
        const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4'


        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=cannes,fr&units=metric&appid=${CLEFAPI}&lang=fr`)
        .then((res) => {
            setCurrentData(res.data.weather[0])
            setData(res.data.main)
            setCity(res.data)
            // console.log(res.data);
        })
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(search);
        setSearch(search)
        const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4'
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${search},fr&units=metric&appid=${CLEFAPI}&lang=fr`)
        .then((res) => {
            setCurrentData(res.data.weather[0])
            setData(res.data.main)
            setCity(res.data)
            console.log(res.data);
        })
    }



    return (
        <div className="flex flex-col justify-center items-center mt-8">
            <form>
                <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Entrez le nom d'une ville" id='search-input' className='p-1' />
                <button onClick={handleSearch} value="Rechercher" className='text-white cursor-pointer border ml-2 p-1 hover:scale-110'>Rechercher</button>
            </form>

            <div className='flex flex-col m-auto mt-10 w-6/12 text-white border'>
                <Card currentData={currentData} data={data} city={city} />
            </div>
        </div>
    );
};

export default Form;