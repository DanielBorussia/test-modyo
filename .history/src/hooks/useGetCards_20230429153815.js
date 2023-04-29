import { useEffect, useState } from 'react';

const useGetCards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10';

    useEffect( () => {
       loadData();
    }, []);

    const loadData = () => {
        setLoading(true);
        fetch(api)
        .then(response => response.json())
        .then(data => transformData(data.entries))
        .catch((e)=>console.log(e))
        .finally(() => setLoading(false));
    }

    const transformData = (data) => {
       const mainData = data.map((card) => card.fields.image);
       const duplicateData = mainData.slice();
       const transformedData = mainData.concat(duplicateData);
       transformedData.sort(() => Math.random() - 0.5);
        alterOrder(transformedData);
    }

    const alterOrder = (data) => {
        data.sort(() => Math.random() - 0.5);
        setCards(data);
    }

    return [cards, loading, alterOrder, loadData];
}

export default useGetCards;