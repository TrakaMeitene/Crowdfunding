import React, { useEffect, useState } from "react";
import "../counter/counter.css";

function Counter({ value }) {

    const [backed, setBacked] = useState(89.914);
    const [backers, setBackers] = useState("5,007");
    const [days, setDays] = useState("56");

    let val = backed + value
    let rangeVal = ((backed + value) / 100.000) * 100

    const [percentage, setPersentage] = useState(Math.round(backed));

    //eslint-disable-next-line
    useEffect(() => {
        if (backed && value !== undefined) {
            setPersentage(Math.round(rangeVal))
        } else { setPersentage(backed) }
        if (value !== undefined) {
            setBacked(backed + value)
        }
        //eslint-disable-next-line
    }, [value])

    if (percentage === NaN) {
        setPersentage(backed)
    }
    return (
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
                <input type="range" value={percentage} onChange={() => { }} />
            </div>

        </div>
    )
}

export default Counter