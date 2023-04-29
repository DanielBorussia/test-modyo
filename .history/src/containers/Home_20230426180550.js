import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';

const Home = () => {
    const [animalsCards, setAnimalsCards] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const cards = useGetCards();
    useEffect(()=>{
        console.log(cards);
    },[]);
    return (
        <div className='cards'>
            <div className='cards__container'>
                {
                    cards.map(animal => <Card key={cards.uuid}/>)
                }
            </div>
        </div>
    );
}

export default Home;