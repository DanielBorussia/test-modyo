import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const cards = useGetCards();

    const flipCard = (code) => {
        if(!firstCard.code){
            setFirstCard({code});
        }
        if(!secondCard.code){
            setSecondCard({code});
        }
        if(firstCard.code == code){
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
                            code={card.uuid}
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