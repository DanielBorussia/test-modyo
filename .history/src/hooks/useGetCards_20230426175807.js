import React, { useEffect, useState } from 'react';

const useGetCards = () => {
    const [cards, setCards] = useState([]);
    const [api, setApi] = useState('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20');

    useEffect( () => {
        console.log("-----");
        fetch(api)
        .then(response => response.json())
        .then(data => setCards(data.entries))
        console.log(cards);
    }, []);

    return cards;
}

export default useGetCards;