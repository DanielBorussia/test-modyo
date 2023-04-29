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
       setCards([{
        alt_text: null,
        content_type: "image/jpeg",
        description: null,
        tags: [],
        title: "Frog",
        url: "https://cloud.modyocdn.com/uploads/a5268065-1c30-4585-bf78-8e2bde7d84fb/original/frog.jpg",
        uuid: "a5268065-1c30-4585-bf78-8e2bde7d84fb",
    },{
        alt_text: null,
        content_type: "image/jpeg",
        description: null,
        tags: [],
        title: "Frog",
        url: "https://cloud.modyocdn.com/uploads/a5268065-1c30-4585-bf78-8e2bde7d84fb/original/frog.jpg",
        uuid: "a5268065-1c30-4585-bf78-8e2bde7d84fb",
    }]);
    }

    const alterOrder = (data) => {
        data.sort(() => Math.random() - 0.5);
        setCards(data);
    }

    return { alterOrder, cards };
}

export default useGetCards;