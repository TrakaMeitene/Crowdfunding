import React, { useEffect, useState } from "react";
import "../counter/counter.css";

function Counter({ value, visible }) {

    const [backed, setBacked] = useState(89.914);
    const [backers, setBackers] = useState(5007);
    const [days] = useState("56");

    let rangeVal = ((backed + value) / 100.000) * 100

    let backersCount = backers + 1
    const [percentage, setPersentage] = useState(Math.round(backed));

    useEffect(() => {
        if (backed && value !== undefined) {
            setPersentage(Math.round(rangeVal))
        } else { setPersentage(backed) }
        if (value !== undefined) {
            setBacked(backed + value)
        }
        //eslint-disable-next-line
    }, [value])


    useEffect(() => {
        if (visible) {
            setBackers(backersCount)
        }
        //eslint-disable-next-line
    }, [visible])

    if (isNaN(percentage)) {
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
                    <h2>{backers.toLocaleString('de-DE')}</h2>
                    <p>total backers</p>
                </div>
                <div className="last">
                    <h2>{days}</h2>
                    <p>days left</p>
                </div>
            </div>

            <div className="mobile-range">
                <input type="range" value={percentage} onChange={() => { }} />
            </div>

        </div>
    )
}

export default Counter