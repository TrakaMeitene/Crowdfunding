import React, { useState, useCallback, useEffect } from "react";
import "./modalFund.css"
import ModalSubmit from "../modalSubmit/modalSubmit";
import ModalInputs from "../pledgeInputs/pledgeInputs"
import PropTypes from 'prop-types';

ModalFund.propTypes = {
    visible: PropTypes.bool,
    handleClick: PropTypes.func,
}

function ModalFund({ visible, handleClick, selectedid}) {

   let selected = ""
    let inputValue = 0
    let inputValue2 = 0
    const [sel, setSel] = useState("off")

   useEffect(() => {setSel(selectedid)
     console.log(window.innerHeight)}, [selectedid])

    const [pledgeValue1, setPledgeValue] = useState(25);
    const [pledgeValue2, setPledgeValue2] = useState(75);

    const [submitModal, setSubmitModal] = useState(false);


    const check = (e) => {
        selected = e.target.id
        setSel(selected);
    }

    const pledge1 = (e) => {
        inputValue = Number(e.target.value)
        if (inputValue < 25) {
            e.target.value = 25
        } else {
            setPledgeValue(inputValue)
        }
    }

    const pledge2 = (e) => {
        inputValue2 = Number(e.target.value)
        if (inputValue2 < 75) {
            e.target.value = 75
        } else {
            setPledgeValue2(inputValue2)
        }
    }

    const submit = (e) => {
        setSubmitModal(true)
        if (e.target.id === "25") {
            handleClick(pledgeValue1, submitModal)
        } else if(e.target.id === "75"){
            handleClick(pledgeValue2, submitModal)
        } else (
            handleClick(0, submitModal))
        setSel("off")
    }

    // close submit modal
    const close = useCallback(() => {
        setSubmitModal(false)
        handleClick(0, submitModal)

    }, [submitModal]);

    //close modal fund window
    const closed = useCallback(() => {
        setSel("off")
        handleClick(0, !submitModal)
    })

    return (
        <>
            <div className={visible ? "modal" : "modalNone"}>
                <p className="close" onClick={closed}>x</p>
                <h3>Back this project</h3>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <ModalInputs check={check} selected={sel} pledge1={pledge1} pledge2={pledge2} submit={submit} />
            </div>
            {submitModal ? <ModalSubmit close={close} /> : ""}
        </>
    )
}

export default ModalFund