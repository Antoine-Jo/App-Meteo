import axios from 'axios';
import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header/Header';

const Home = () => {
    const CLEFAPI = '8e9391f167c17b3253b145b2a036ffd4'


    // axios
    // .get(`https://api.openweathermap.org/data/2.5/weather?q=Brest,fr&appid=${CLEFAPI}&lang=fr`)
    // .then((res) => {
    //     console.log(res.data);
    // })

    return (
        <div>
            <Header />
            <Card />
        </div>
    );
};

export default Home;