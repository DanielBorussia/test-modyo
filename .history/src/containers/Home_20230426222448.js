import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unFlippedCards, setUnFlippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
    const [points, setPoints] = useState(0);
    const [fouls, setFouls] = useState(0);
    const cards = useGetCards();

    const flipCard = (code) => {
       console.log("click");
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
        console.log("consultamos si coindicen");
        console.log("primera",firstCard);
        console.log("segunda",secondCard);
        if(firstCard.code && secondCard.code){
            (firstCard.code == secondCard.code) ? disableCards() : unFlipCards();
        } 
    }

    const unFlipCards = () => {
        setPoints(fouls++);
        setUnFlippedCards([firstCard.code, secondCard.code]);
        resetCards();
    }

    const disableCards = () => {
        setPoints(points++);
        setDisabledCards([firstCard.code, secondCard.code]);
        resetCards();
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }

    useEffect(() => {
        checkForMatch();
    }, [secondCard]);

    return (
        <div className='cards'>
            <p>Aciertos : {points} Errores : {fouls}</p>
            <div className='cards__container'>
                {
                    cards.map((card, index) => 
                        <Card 
                            key={index}
                            code={index}
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