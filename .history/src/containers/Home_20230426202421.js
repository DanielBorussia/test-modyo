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
        console.log(firstCard);
        if(firstCard.code == code){
            return false;
        }
        if(!firstCard.code){
            setFirstCard({code});
        }else if(!secondCard.code){
            setSecondCard({code});
        }
        return true;
    }

    const checkForMatch = () => {
        if(firstCard.code && secondCard.code){
            (firstCard.code == secondCard.code) ? disableCards() : unFlipCards();
        } 
    }

    const unFlipCards = () => {
        setUnFlippedCards([firstCard.code, secondCard.code]);
        resetCards();
    }

    const disableCards = () => {
        setDisabledCards([firstCard.code, secondCard.code]);
        resetCards();
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }

    useEffect(() => {
        console.log("consultamos si coindicen");
        checkForMatch();
    }, [secondCard]);

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