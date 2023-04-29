import React from 'react';
import '../components/Card.css';
import ReactCardFlip from 'react-card-flip';
import backCard from '../images/card-back.png';

const Card = () => {
    return (
        <div className='card'>
            <ReactCardFlip isFlipped={false}>
                <img className='card__image' src={backCard} alt="back-face" />
                <img className='card_image' src={backCard} alt="ini" />
            </ReactCardFlip>
        </div>
    );
}

export default Card;