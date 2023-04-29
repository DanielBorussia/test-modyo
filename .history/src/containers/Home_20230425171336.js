import React, { useState } from 'react';
import Card from '../components/Card';

const Home = () => {
    const [animals, setAnimals] = useState([1,2,3,4,5,6,7,8,9,10])
    return (
        <>
            {
                animals.map(animal => <Card />)
            }
        </>
    );
}

export default Home;