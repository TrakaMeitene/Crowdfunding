import React, { useEffect, useState } from "react";
import "../counter/counter.css";

function Counter({value}){
console.log(value, typeof value)
    const [backed, setBacked] = useState(89.914);
    const [backers, setBackers] = useState("5,007");
    const [days, setDays] = useState("56");

    useEffect(()=>{
        if(backed && value !== undefined){
            setBacked(backed + value)
            console.log(typeof backed, typeof value)
        }
    }, [value]);

    return(
        <div className="counter">
<div className="count">
    <div>
        <h2>${backed}</h2>
        <p>of $100,000 backed</p>
</div>
    <div>
        <h2>{backers}</h2>
        <p>total backers</p>
    </div>
    <div className="last">
        <h2>{days}</h2>
        <p>days left</p>
    </div>
    </div>

    <div>
        <input type="range" />
    </div>

    </div>
    )
}

export default Counter