import {useEffect, useState} from "react";


const useDelayedRequest = (value: string, delay: number = 300) =>{
    const [delayedValue, setDelayedValue] = useState(value)
    useEffect(() => {
        const handleTime = setTimeout(()=>{
            setDelayedValue(value)
        }, delay)
        return () =>{
            clearTimeout(handleTime)
        }
    }, [value, delay]);
    return delayedValue
}

export default useDelayedRequest;