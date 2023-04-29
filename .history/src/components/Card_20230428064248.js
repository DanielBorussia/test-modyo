import React, { useEffect, useState } from 'react';
import '../styles/Card.css';
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
            }, 500);
        }
    },[unFlippedCards]);

    useEffect(()=>{
        console.log(disabledCards);
        if(disabledCards.includes(code)){
            setIsActiveEvent(false);
        }
    }, [disabledCards]);

    return (
        <div className='card'>
            {/*}<ReactCardFlip isFlipped={isFlipped}>
                <img className='card__image' src={backCard} alt="back-face" onClick={isActiveEvent ? handleClick : null}/>
                <img className={`card__image ${disabledCards.includes(code) && 'card__image--disable'}`} src={image} alt={title} onClick={isActiveEvent ? handleClick : null}/>
            </ReactCardFlip>*/}
            <div className='card__container'>
                <div className='card__face card__back'>
                
                </div>
                <div className='card__face card__front'>
                
                </div>
            </div>
        </div>
    );
}

export default Card;