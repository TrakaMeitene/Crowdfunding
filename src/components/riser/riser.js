import "./riser.css"
import React,  { useEffect, useState, useCallback} from "react"
import ModalFund from "../modalFund/modalFund"
import Counter from "../counter/counter"
import About from "../about/about"

function Riser({modalMask}){

    let book = "Bookmark"
    let booked2 = "Bookmarked"
    let greenBookmark = "bookmark active-state"

    const [toggle, setToggle] = useState(true);
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState();
    const [submitMask, setSumbitMask] = useState(false)

    useEffect(()=> {   modalMask(visible, submitMask)}, [toggle, visible, submitMask]);

    const booked=()=>{
    return( 
        setToggle(current => !current)
    )}

    const modalopen=()=>{
        return (
        setVisible(true)
        )
    }

const handleClick = useCallback((value25, submitModal) => {
   setVisible(false)
   setValue(value25)
setSumbitMask(!submitModal)
  });

    return(
        <div className="column">
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
<About handleClick={handleClick} modalopen={modalopen}/>
  </div>

)
}
export default Riser