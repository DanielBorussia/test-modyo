import React from 'react';
import '../components/Card.css';
import ReactCardFlip from 'react-card-flip';
import backCard from '../images/card-back.png';

const Card = ({ title, image}) => {
    return (
        <div className='card'>
            <ReactCardFlip isFlipped={true}>
                <img className='card__image' src={backCard} alt="back-face" />
                <img className='card__image' src={image} alt={title} />
            </ReactCardFlip>
        </div>
    );
}

export default Card;