import React, { useState, useCallback, useEffect} from "react";
import "./modalFund.css"
import ModalSubmit from "../modalSubmit/modalSubmit";
import ModalInputs from "../pledgeInputs/pledgeInputs"

function ModalFund({visible, handleClick, selectedFromAbout}){

    let selected = ""
    let inputValue = 0
    let inputValue2 = 0
    const [sel, setSel] = useState(selected)

    const [pledgeValue1, setPledgeValue] = useState(25);
    const [pledgeValue2, setPledgeValue2] = useState(75);

    const [submitModal, setSubmitModal] = useState(false);

useEffect(()=>{
   setSel(selectedFromAbout)
})

 const check=(e)=>{
    console.log("strada", e.target.id)
   selected = e.target.id
   setSel(selected)
 }
const pledge1 = (e)=>{
    inputValue=  Number(e.target.value)
    if(inputValue < 25){
     e.target.value = 25
    } else {
            setPledgeValue(inputValue)
        }
}

const pledge2 = (e)=>{
    inputValue2=  Number(e.target.value)
    if(inputValue2 < 75){
     e.target.value = 75
    } else {
            setPledgeValue2(inputValue2)
        }
}

 const submit =(e)=>{
    setSubmitModal(true)
     if(e.target.id === "25"){
     handleClick(pledgeValue1, submitModal)
     } else {
         handleClick(pledgeValue2, submitModal)
     }
 }


 const close = useCallback(() => {
    setSubmitModal(false)
    handleClick(0, submitModal)
   }, [submitModal]);

   const closed = ()=>{
       handleClick(0, !submitModal)
   }

    return(
        <>
<div className={visible ? "modal" : "modalNone"}>
    <p className="close" onClick={closed}>x</p>
    <h3>Back this project</h3>
    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
<ModalInputs check={check} sel={sel} pledge1={pledge1} pledge2={pledge2} submit={submit}/>
</div>
 {submitModal ? <ModalSubmit close={close} /> : ""}
 </>
    )
}

export default ModalFund