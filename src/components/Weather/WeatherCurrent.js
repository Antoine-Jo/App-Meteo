import React from 'react';

const WeatherCurrent = ({ currentData, data, city }) => {

    const hours = () => {
        let heureActuelle = new Date().getHours();
    // console.log(heureActuelle);
        if (heureActuelle >= 6 && heureActuelle < 18) {
            return <img src={`./ressources/jour/${currentData.icon}.svg`} className='w-56 self-center justify-self-center' alt="logo du temps qu'il fait" />
        } else {
            return <img src={`./ressources/nuit/${currentData.icon}.svg`} className='w-56 self-center justify-self-center' alt="logo du temps qu'il fait" />
        }
    }

    return (
        <div className='m-10 grid grid-cols-2'>
            {hours()}
            <div className='self-center justify-self-center text-4xl'>
                <p className='first-letter:capitalize'>{currentData.description}</p>
                <p>{`${Math.trunc(data.temp)}°`}</p>
                <p>{city.name}</p>
            </div>
        </div>
    );
};

export default WeatherCurrent;

// if(heureActuelle >= 6 && heureActuelle < 21) {
//     imgIcone.src = `ressources/jour/${resultatsAPI.current.weather[0].icon}.svg`
// } else  {
//    imgIcone.src = `ressources/nuit/${resultatsAPI.current.weather[0].icon}.svg`
// }