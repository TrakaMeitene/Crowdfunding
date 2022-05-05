import React, { useState, useCallback} from "react";
import "./modalFund.css"
import ModalSubmit from "../modalSubmit/modalSubmit";

function ModalFund({visible, handleClick, pledge, pledgetwo}){
    let selected = ""
    const [sel, setSel] = useState(selected)

    const [pledgeValue1, setPledgeValue] = useState(25);
    const [pledgeValue2, setPledgeValue2] = useState(75);

    const [submitModal, setSubmitModal] = useState(false);
  
 const check=(e)=>{
   selected = e.target.id
   setSel(selected)
 }
const pledge1 = (e)=>{
    setPledgeValue(e.target.value)
}

const pledge2 = (e)=>{
    setPledgeValue2(e.target.value)
}

 const submit =()=>{
     console.log("strada")
     handleClick(pledgeValue1)
     setSubmitModal(true)
 }

 const close = useCallback(() => {
    setSubmitModal(false)
   }, []);

    return(
        <>
<div className={visible ? "modal" : "modalNone"}>
    <p className="close" onClick={handleClick}>x</p>
    <h3>Back this project</h3>
    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
<div className={sel === "1" ? "green" : "borderedWindows"}>
<div className="row">
    <input type="radio" id="1" name="yes" onChange={check} />
    <div>
    <h4>Pledge with no reward</h4>
    <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
</div>
</div>
</div>

<div className={sel === "2" ? "green" : "borderedWindows"}>
<div className="row">
    <input type="radio" id="2" name="yes" onChange={check}/>
    <div>
   <div className="modal-header">
       <span>
       <h4>Bamboo Stand</h4>
       <p className="greenText">Pledge $25 or more</p>
       </span>
       <p><b>101</b>left</p>
       </div>
<p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
</div>
</div>
{/* window that opens when item selected */}
<div className={sel === "2" ? "pledge" : "noShow"}>
    <p>Enter your pledge</p>
    <input type="number" className="inputPledge" min="25" step="1" defaultValue="25" onChange={pledge1}/>
    <button type="submit" onClick ={submit} >Continue</button>
    </div>

</div>

<div className={sel === "3" ? "green" : "borderedWindows"}>
    <div className="row">
    <input type="radio" id="3" name="yes" onChange={check}/>
    <div>
   <div className="modal-header">
       <span>
       <h4>Black Edition Stand</h4>
       <p className="greenText">Pledge $75 or more</p>
       </span>
       <p><b>64</b>left</p>
       </div>
<p>You get a Black Special Edition computer stand and a personal thank you.
You'll be added to our Backer member list. Shipping is included.</p>
</div>
</div>
<div className={sel === "3" ? "pledge" : "noShow"}>
    <p>Enter your pledge</p>
    <form>
    <input type="number" className="inputPledge" min="75" step="1" defaultValue="75" onChange={pledge2}/>
    <button type="submit" >Continue</button>
    </form>
    </div>
</div>

<div className="borderedWindows">
<div className="row">
    <input type="radio" id="4" disabled/>
    <div>
   <div className="modal-header">
       <span>
       <h4>Mahogany Special Edition</h4>
       <p className="greenText">Pledge $200 or more</p>
       </span>
       <p><b>0</b>left</p>
       </div>
<p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
thank you. You'll be added to our Backer member list. Shipping is included,</p>
</div>
</div>
</div>

</div>
 {submitModal ? <ModalSubmit close={close} /> : ""}
 </>
    )
}

export default ModalFund