import React, { useEffect, useState } from 'react';
import '../styles/Card.css';
import backCard from '../images/card-back.png';

const Card = ({ code, title, image, flipCard, unFlippedCards, disabledCards}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isInactiveEvent, setIsInactiveEvent] = useState(false);

    const handleClick = e => {
        if(isInactiveEvent){
            return false;
        }
        if(flipCard(code, title)){
            setIsFlipped(!isFlipped);
        }
    }

    useEffect(()=>{
        if(unFlippedCards.length == 0){
            setIsFlipped(false);
        }
        if(unFlippedCards.includes(code)){
            setTimeout(()=>{
                setIsFlipped(false);
            }, 500);
        }
    },[unFlippedCards]);

    useEffect(()=>{
        if(disabledCards.length == 0){
            setIsInactiveEvent(false);
        }
        if(disabledCards.includes(code)){
            setIsInactiveEvent(false);
        }
    }, [disabledCards]);

    return (
        <div className='card'>
            <div className={`card__container ${isFlipped && 'card__container--flipped'}`}>
                <div className='card__face card__back'>
                    <img className={`card__image ${disabledCards.includes(code) && 'card__image--disable'}`} src={image} alt={title} onClick={handleClick}/>
                </div>
                <div className='card__face card__front'>
                    <img className='card__image' data-testid={`card-${code}`} src={backCard} alt="back-face" onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}

export default Card;