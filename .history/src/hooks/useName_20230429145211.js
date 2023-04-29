import { useEffect, useState } from "react"

const useName = () => {
    const [name, setName] = useState();
    useEffect(()=>{
        setName("BVB");
    },[]);
    return name;
}

export default useName;