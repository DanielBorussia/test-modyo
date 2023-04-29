import React from 'react';

const Score = ({ points, fouls }) => {
    return (
        <p>Aciertos : {points} Errores : {fouls}</p>
    );
}

export default Score;