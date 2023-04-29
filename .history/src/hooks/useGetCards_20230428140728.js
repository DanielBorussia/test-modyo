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
       const mainData = data.map((card) => card.fields.image);
       const duplicateData = mainData.slice();
       const transformedData = mainData.concat(duplicateData);
       transformedData.sort(() => Math.random() - 0.5);
       console.log({transformedData});
       setCards(transformedData);
    }

    const alterOrder = (data) => {
        data.sort(() => Math.random() - 0.5);
        setCards(data);
    }

    return { alterOrder, cards };
}

export default useGetCards;