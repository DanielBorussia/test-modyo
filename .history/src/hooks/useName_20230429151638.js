import { useEffect, useState } from "react"
const api = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10';
const useName = () => {
    const [name, setName] = useState();
    const [data, setData] = useState([]);
    useEffect(()=>{
        setName("BVB");
       
    },[]);

    const decirHola = () => {
        setName("Oscar");
         fetch(api)
        .then(response => response.json())
        .then(data => setData(data))
    }

    return {name, data, decirHola};
}

export default useName;