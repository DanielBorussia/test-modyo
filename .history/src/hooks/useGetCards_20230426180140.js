import React, { useEffect, useState } from 'react';

const useGetCards = () => {
    const [cards, setCards] = useState([]);
    const [api, setApi] = useState('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20');

    useEffect( () => {
        console.log("-----");
        fetch(api)
        .then(response => response.json())
        .then(data => setCards(data.entries))
        const u = cards.map((card) => card.fields.image.url);
        console.log(u);
    }, []);

    return cards;
}

export default useGetCards;