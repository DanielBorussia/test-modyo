import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [valueUser, setValueUser] = useState(()=>{
        const item = localStorage.getItem(key);
        return item ? item : initialValue;
    })

    const setValueData = (value) => {
        setValueUser(value);
        localStorage.setItem(key, value);
    }
    return [ valueUser, setValueData ];
}



export default useLocalStorage;