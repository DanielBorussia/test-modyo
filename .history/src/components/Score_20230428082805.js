import React from 'react';

const Score = ({ points, fouls }) => {
    return (
        <h1 className='d-inline-flex'>
            <p className='text-light mr-1'>Aciertos : {points} </p>
            <p className='text-light'>Errores : {fouls}</p>
        </h1>
    );
}

export default Score;