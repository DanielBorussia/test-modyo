import React from 'react';

const Score = ({ points, fouls, username }) => {
    return (
        <React.Fragment>
            <h1 className='d-inline-flex mb-0'>
                <p className='text-light px-2'>Aciertos : {points} </p>
                <p className='text-light'>Errores : {fouls}</p>
            </h1>
            {username  ?<h2 className='text-light'>Usuario : {username} </h2> : null}
        </React.Fragment>
    )
}

export default Score;