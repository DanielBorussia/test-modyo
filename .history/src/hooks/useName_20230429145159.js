import { useEffect, useState } from "react"

const useName = (initial) => {
    const [name, setName] = useState(initial);
    useEffect(()=>{
        setName("BVB");
    },[]);
    return name;
}

export default useName;