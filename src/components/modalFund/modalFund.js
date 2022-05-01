import React, { useState} from "react";
import "./modalFund.css"

function ModalFund(visible){
    let selected = ""
    const [sel, setSel] = useState(selected)
  
 const check=(e)=>{
   selected = e.target.value
   setSel(selected)
 }
 

    return(
<div className={visible.visible ? "modal" : "modalNone"}>
    <p className="close">x</p>
    <h3>Back this project</h3>
    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
<div className={sel === "1" ? "green" : "borderedWindows"}>
<div className="row">
    <input type="radio" value="1" name="yes" onChange={check} />
    <div>
    <h4>Pledge with no reward</h4>
    <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
</div>
</div>
</div>

<div className={sel === "2" ? "green" : "borderedWindows"}>
<div className="row">
    <input type="radio" value="2" name="yes" onChange={check}/>
    <div>
   <div className="modal-header">
       <span>
       <h4>Bamboo Stand</h4>
       <p>Pledge $25 or more</p>
       </span>
       <p><b>101</b>left</p>
       </div>
<p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
</div>
</div>
{/* window that opens when item selected */}
<div className={sel === "2" ? "pledge" : "noShow"}>
    <p>Enter your pledge</p>
    <form>
    <input type="number" className="inputPledge" min="25" step="1" defaultValue="25"/>
    <button type="submit">Continue</button>
    </form>
    </div>

</div>

<div className={sel === "3" ? "green" : "borderedWindows"}>
    <div className="row">
    <input type="radio" value="3" name="yes" onChange={check}/>
    <div>
   <div className="modal-header">
       <span>
       <h4>Black Edition Stand</h4>
       <p>Pledge $75 or more</p>
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
    <input type="number" className="inputPledge" min="75" step="1" defaultValue="75"/>
    <button type="submit">Continue</button>
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
       <p>Pledge $200 or more</p>
       </span>
       <p><b>0</b>left</p>
       </div>
<p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
thank you. You'll be added to our Backer member list. Shipping is included,</p>
</div>
</div>
</div>

</div>
    )
}

export default ModalFund