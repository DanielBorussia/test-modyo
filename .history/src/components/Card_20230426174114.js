import React from 'react';
import '../components/Card.css';
import ReactCardFlip from 'react-card-flip';
import backCard from '../images/card-back.png';

const Card = () => {
    return (
        <div className='card'>
            <ReactCardFlip isFlipped={false}>
                <img src={backCard} />
                <img src={backCard} />
            </ReactCardFlip>
        </div>
    );
}

export default Card;