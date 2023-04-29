import { useState } from "react"

const useName = (initial) => {
    const [name, setName] = useState(initial);
    return name;
}

export default useName;