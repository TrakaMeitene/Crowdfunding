import React, { useEffect } from "react";
import "./modalSubmit.css";
import checkmark from "../../utilities/icon-check.svg";

function ModalSubmit({ close}){


return(
<div className="modalSubmit">
    <img alt="circle with checkmark" src={checkmark}/>
    <h2>Thanks for your support!</h2>
    <p>Your pledge brings us one step closer to sharing Mastercraft
Bamboo Monitor Riser worldwide. You will get an email once
our campaign is completed.</p>
<button onClick={close}>Got it!</button>
</div>
)

}

export default ModalSubmit