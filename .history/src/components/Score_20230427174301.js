import React from 'react';

const Score = ({ points, fouls }) => {
    return (
        <h1>Aciertos : {points} Errores : {fouls}</h1>
    );
}

export default Score;