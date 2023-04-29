import React from 'react';

const Score = ({ points, fouls }) => {
    return (
        <h1 className='d-inline-flex'>
            <p className='text-success'>Aciertos</p>: {points} 
            <p className='text-danger'>Errores</p> : {fouls}</h1>
    );
}

export default Score;