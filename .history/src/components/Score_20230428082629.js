import React from 'react';

const Score = ({ points, fouls }) => {
    return (
        <h1 className='d-inline-flex'>
            <p className='text-light'>Aciertos</p>: {points} 
            <p className='text-light'>Errores</p> : {fouls}</h1>
    );
}

export default Score;