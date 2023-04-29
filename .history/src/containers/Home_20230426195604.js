import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unFlippedCards, setUnFlippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
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

    const checkForMatch = () => {
        (firstCard?.code == secondCard?.code) ? disableCards() : unFlipCards();
        resetCards();    
    }

    const unFlipCards = () => {
        setUnFlippedCards([firstCard.code, secondCard.code]);
    }

    const disableCards = () => {
        setDisabledCards([firstCard.code, secondCard.code]);
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
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
                            unFlippedCards={unFlippedCards}
                            disabledCards={disabledCards}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Home;