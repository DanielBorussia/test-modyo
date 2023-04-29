import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=>{
        const item = localStorage.getItem(key);
        return item ? item : initialValue;
    })

    const setValueData = (value) => {
        setValue(value);
        localStorage.setItem(key, value);
    }
    return [ value, setValueData];
}



export default useLocalStorage;