import "./riser.css"
import React,  { useEffect, useState } from "react"



function Riser(){
    let book = "Bookmark"
    let booked2 = "Bookmarked"
    let greenBookmark = "bookmark active-state"

    const [classe, setClass] = useState(false)

    useEffect(()=> { }, [classe]);

    const booked=()=>{
    return( 
        setClass(current => !current)
    )}

    return(
<div className="riser">
    <div className="logo"/>
    <h2>Mastercraft Bamboo Monitor Riser</h2>
    <p style={{textAlign: "center"}}>A beautirul & handcrarted monitor stand to reduce neck and eve strain.</p>
<div className="buttons">
    <button>Back this project</button>
    <button onClick={booked} className={classe ? "bookmark" : greenBookmark}>{classe ? book: booked2}</button>
    </div>
</div>
)
}
export default Riser