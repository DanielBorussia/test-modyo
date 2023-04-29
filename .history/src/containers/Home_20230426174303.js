import React, { useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';

const Home = () => {
    const [animalsCards, setAnimalsCards] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    return (
        <div className='cards'>
            <div className='cards__container'>
                {
                    animalsCards.map(animal => <Card />)
                }
            </div>
        </div>
    );
}

export default Home;