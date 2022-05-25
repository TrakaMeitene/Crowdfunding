import "./header.css"
import React, {useState} from "react"

function Header(){
const [open, setOpen] = useState(false)

    const menu =()=>{
setOpen(current => !current)
    }

    return(
<div className="header">
    <nav>
        <p>crowdfund</p>
        <div className={open ? "closemenu" : "hamburger"} onClick={menu}></div>
        <ul className={open ? "" : "none"}>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
        </ul>
    </nav>
</div>
    );
}
export default Header