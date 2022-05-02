import "./riser.css"
import React,  { useEffect, useState, useCallback} from "react"
import ModalFund from "../modalFund/modalFund"

function Riser(){

    let book = "Bookmark"
    let booked2 = "Bookmarked"
    let greenBookmark = "bookmark active-state"

    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(()=> { }, [toggle]);
    const booked=()=>{
    return( 
        setToggle(current => !current)
    )}

    const modalopen=()=>{
        return (
        setVisible(true),
         document.body.className = "mask"
        )
    }

const handleClick = useCallback(() => {
   setVisible(false)
  }, []);

    return(
<div className="riser">
    <div className="logo"/>
    <h2>Mastercraft Bamboo Monitor Riser</h2>
    <p style={{textAlign: "center"}}>A beautirul & handcrarted monitor stand to reduce neck and eve strain.</p>
<div className="buttons">
    <button onClick={modalopen}>Back this project</button>
    <button onClick={booked} className={toggle ? "bookmark" : greenBookmark}>{toggle ? book: booked2}</button>
    </div>
    <ModalFund visible={visible}  handleClick={handleClick}/>
</div>
)
}
export default Riser