import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';

const Home = () => {
    const cards = useGetCards();
    
    return (
        <div className='cards'>
            <div className='cards__container'>
                {
                    cards.map((card, index) => 
                        <Card 
                            key={index}
                            title={card.title}
                            image={card.url}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Home;