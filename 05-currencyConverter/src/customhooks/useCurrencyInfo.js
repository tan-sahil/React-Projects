import { useState, useEffect } from "react";
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    // now at the time of loading outside react k cycle k call kr rha hu. mtlb kuch side effects
    // deal krne hai.. 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res => res.json())
        .then(resp => setData(resp[currency]))
    },[currency])

    return data;
}

export default useCurrencyInfo;