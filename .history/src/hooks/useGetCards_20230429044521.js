import { useEffect, useState } from 'react';

const useGetCards = async () => {
    const [cards, setCards] = useState([]);
    const api = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10';

    useEffect( () => {
       getData();
    }, []);

    const getData = async () => {
        const response = await fetch(api);
        const responseJson = await response.json();
        const data = transformData(responseJson.entries);
        console.log(data);
        setCards(data);
    }

    const transformData = (data) => {
        console.log(data);
       const mainData = data.map((card) => card.fields.image);
       const duplicateData = mainData.slice();
       const transformedData = mainData.concat(duplicateData);
       transformedData.sort(() => Math.random() - 0.5);
       console.log(transformedData);
        return transformedData;
    }

    const alterOrder = (data) => {
        data.sort(() => Math.random() - 0.5);
        setCards(data);
    }

    return [cards, alterOrder];
}

export default useGetCards;