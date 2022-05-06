import "./riser.css"
import React,  { useEffect, useState, useCallback} from "react"
import ModalFund from "../modalFund/modalFund"
import Counter from "../counter/counter"

function Riser(){

    let book = "Bookmark"
    let booked2 = "Bookmarked"
    let greenBookmark = "bookmark active-state"

    const [toggle, setToggle] = useState(true);
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState();

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

const handleClick = useCallback((value25 ) => {
    console.log(value25)
   setVisible(false)
   setValue(value25)
  }, []);

    return(
        console.log(value),
        <>
<div className="riser">
    <div className="logo"/>
    <h2>Mastercraft Bamboo Monitor Riser</h2>
    <p style={{textAlign: "center"}}>A beautirul & handcrarted monitor stand to reduce neck and eve strain.</p>
<div className="buttons">
    <button onClick={modalopen}>Back this project</button>
    <button onClick={booked} className={toggle ? "bookmark" : greenBookmark}>{toggle ? book: booked2}</button>
    </div>   
</div>
<ModalFund visible={visible}  handleClick={handleClick} />
<Counter value={value}/>
  </>

)
}
export default Riser