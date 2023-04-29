import React, { useEffect, useState } from 'react';

const useGetCards = () => {
    const [cards, setCards] = useState([]);
    const api = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10';

    useEffect( () => {
        fetch(api)
        .then(response => response.json())
        .then(data => transformData(data.entries))
    }, []);

    const transformData = (data) => {
       const dataT = data.map((card) => card.fields.image);
       const dataDuplicate = dataT.slice();
       dataT = dataT.concat(dataDuplicate);
       setCards(dataT);
    }

    return cards;
}

export default useGetCards;