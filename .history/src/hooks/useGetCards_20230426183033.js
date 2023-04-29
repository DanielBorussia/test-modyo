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
       console.log(transformedData);
       const dataF = transformedData.sort(()=>{
        return Math.random() - 0.5
       });
       console.log(dataF);
       setCards(transformedData);
    }

    return cards;
}

export default useGetCards;