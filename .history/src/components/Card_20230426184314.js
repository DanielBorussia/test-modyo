import React, { useState } from 'react';
import '../components/Card.css';
import ReactCardFlip from 'react-card-flip';
import backCard from '../images/card-back.png';

const Card = ({ title, image}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = e => {
        setIsFlipped(!isFlipped);
    }
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