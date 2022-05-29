import React, { useEffect } from "react"

function ModalInputs({ check, selected, pledge1, pledge2, submit, visible}) {

    useEffect (() => {console.log(selected)}, [selected])
    return (
        <>
            {/* pirmais logs */}
            <label className={selected === "1" ? "green" : "borderedWindows"} id="first">
                <div className="row">
                    <input type="radio" htmlFor="first" id="1" name="yes"  onChange={check} checked={selected === '1'}/>
                    <div>
                        <h4>Pledge with no reward</h4>
                        <p className={visible ? "modal-text" : ""}>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </div>
                </div>
                <div className={selected === "1" ? "pledge mobile" : "noShow"}>
                    <input type="email" placeholder="example@domain.com" />
                    <button type="submit" id="0" onClick={submit}>Continue</button>
                </div>

            </label>
            {/* otrais logs */}
            <label className={selected === "2" ? "green" : "borderedWindows"} id="second">
                <div className="row">
                    <input type="radio" id="2" name="yes" htmlFor="second" onChange={check} checked={selected === '2'}/>
                    <div>
                        <div className="modal-header">
                            <span>
                                <h4>Bamboo Stand</h4>
                                <p className="greenText">Pledge $25 or more</p>
                            </span>
                            <p className="count-left"><b>101</b>left</p>
                        </div>
                        <p className={visible ? "modal-text" : ""}>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
                        <p className="count-bottom"><b>101</b>left</p>
                    </div>
                </div>
                {/* window that opens when item selected */}
                <div className={selected === "2" ? "pledge" : "noShow"}>
                    <p>Enter your pledge</p>
                    <input type="number" className="inputPledge" onBlur={pledge1} defaultValue={25} min={25} max={100} />
                    <button type="submit" id="25" onClick={submit}>Continue</button>
                </div>

            </label>
            {/* trešais logs  */}
            <label className={selected === "3" ? "green" : "borderedWindows"} id="third">
                <div className="row">
                    <input type="radio" id="3" name="yes"  htmlFor="third" onChange={check} checked={selected === '3'}/>
                    <div>
                        <div className="modal-header">
                            <span>
                                <h4>Black Edition Stand</h4>
                                <p className="greenText">Pledge $75 or more</p>
                            </span>
                            <p className="count-left"><b>64</b>left</p>
                        </div>
                        <p className={visible ? "modal-text" : ""}>You get a Black Special Edition computer stand and a personal thank you.
                            You'll be added to our Backer member list. Shipping is included.</p>
                            <p className="count-bottom"><b>64</b>left</p>
                    </div>
                </div>
                <div className={selected === "3" ? "pledge" : "noShow"}>
                    <p>Enter your pledge</p>
                    <input type="number" className="inputPledge" min="75" step="1" defaultValue="75" onBlur={pledge2} />
                    <button type="submit" id="75" onClick={submit}>Continue</button>
                </div>
            </label>
            {/* ceturtais logs */}
            <label className="borderedWindows">
                <div className="row disabled">
                    <input type="radio" id="4" disabled />
                    <div>
                        <div className="modal-header">
                            <span>
                                <h4>Mahogany Special Edition</h4>
                                <p className="greenText">Pledge $200 or more</p>
                            </span>
                            <p className="count-left"><b>0</b>left</p>
                        </div>
                        <p className={visible ? "modal-text" : ""}>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
                            thank you. You'll be added to our Backer member list. Shipping is included,</p>
                            <p className="count-bottom"><b>0</b>left</p>
                    </div>
                </div>
            </label>
        </>
    )
}

export default ModalInputs