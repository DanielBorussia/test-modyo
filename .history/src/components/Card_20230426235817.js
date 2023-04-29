import React, { useEffect, useState } from 'react';
import '../components/Card.css';
import ReactCardFlip from 'react-card-flip';
import backCard from '../images/card-back.png';

const Card = ({ code, title, image, flipCard, unFlippedCards, disabledCards}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isActiveEvent, setIsActiveEvent] = useState(true);
    const handleClick = e => {
        if(flipCard(code, title)){
            setIsFlipped(!isFlipped);
        }
    }

    useEffect(()=>{
        if(unFlippedCards.includes(code)){
            setTimeout(()=>{
                setIsFlipped(false);
            }, 700);
        }
    },[unFlippedCards]);

    useEffect(()=>{
        if(disabledCards.includes(code)){
            setIsActiveEvent(false);
        }
    }, [disabledCards]);
    return (
        <div className='card'>
            <ReactCardFlip isFlipped={isFlipped}>
                <img className='card__image' src={backCard} alt="back-face" onClick={isActiveEvent ? handleClick : null}/>
                <img className='card__image' src={image} alt={title} onClick={isActiveEvent ? handleClick : null}/>
            </ReactCardFlip>
        </div>
    );
}

export default Card;