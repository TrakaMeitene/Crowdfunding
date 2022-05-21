import React, { useState } from "react";
import "../about/about.css"
import ModalFund from "../modalFund/modalFund"

function About({handleClick, modalopen}){

    let selectedId = ""
const [visible, setVisible] = useState(false)
const [selected, setSelected] = useState("")
  
    const check=(e)=>{
        selectedId = e.target.id
        setSelected(selectedId)
        modalopen(selectedId)
      }

    return(
        <>
        <div className="about">

            <h3>About this project</h3>
<p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
<br/>
<br/>
Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
{/* pirmais logs */}
        <div className="borderedWindows">
<div className="row">
    <div>
   <div className="static-header height">
       <h4>Bamboo Stand</h4>
       <p className="greenText">Pledge $25 or more</p>
       </div>
<p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
</div>
</div>
<div className="static-header"><span><h1>101</h1><p>left</p></span><button id="2" onClick={check}>Select Reward</button></div>
</div>
{/* otrais logs */}
<div className="borderedWindows">
    <div className="row">
    <div>
   <div className="static-header height">
       <h4>Black Edition Stand</h4>
       <p className="greenText">Pledge $75 or more</p>
       </div>
<p>You get a Black Special Edition computer stand and a personal thank you.
You'll be added to our Backer member list. Shipping is included.</p>
</div>
</div>
<div className="static-header"><span><h1>64</h1><p>left</p></span><button id="3" onClick={check}>Select Reward</button></div>
</div>
{/* trešais logs */}
<div className="borderedWindows">
<div className="row">
    <div>
   <div className="static-header height">
       <h4>Mahogany Special Edition</h4>
       <p className="greenText">Pledge $200 or more</p>
       </div>
<p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
thank you. You'll be added to our Backer member list. Shipping is included,</p>
</div>
</div>
<div className="static-header"><span><h1>0</h1><p>left</p></span><button disabled>Select Reward</button></div>
</div>

        </div>
        </>
        )
        }

export default About