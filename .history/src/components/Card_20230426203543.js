import React, { useEffect, useState } from 'react';
import '../components/Card.css';
import ReactCardFlip from 'react-card-flip';
import backCard from '../images/card-back.png';

const Card = ({ code, title, image, flipCard, unFlippedCards, disabledCards}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = e => {
        if(flipCard(code)){
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
            setIsFlipped(true);
        }
    }, [disabledCards]);
    return (
        <div className='card'>
            <ReactCardFlip isFlipped={isFlipped}>
                <img className='card__image' src={backCard} alt="back-face" onClick={handleClick}/>
                <img className='card__image' src={image} alt={title} onClick={handleClick}/>
            </ReactCardFlip>
        </div>
    );
}

export default Card;