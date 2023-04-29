import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const cards = useGetCards();

    flipCard = (uuid) => {
        if(!firstCard.uuid){
            setFirstCard({uuid});
        }
        if(!secondCard.uuid){
            setSecondCard({uuid});
        }
        if(firstCard.uuid == uuid){
            return false;
        }
        return true;
    }

    return (
        <div className='cards'>
            <div className='cards__container'>
                {
                    cards.map((card, index) => 
                        <Card 
                            key={index}
                            title={card.title}
                            image={card.url}
                            flipCard={flipCard}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Home;