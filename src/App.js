
import React, {useCallback, useEffect, useState, useTransition} from 'react';
import './App.css';
import Header from "./components/header/header"
import ModalFund from './components/modalFund/modalFund';
import Riser from "./components/riser/riser"
import About from "../src/components/about/about"

function App() {
  const [modalvisible, setModalMask] = useState(false)
const [submitModalMask, setSubmitModalMask] = useState(true)


  const modalMask= useCallback((visible, modal)=>{
    setModalMask(visible)
setSubmitModalMask(modal)
window.scrollTo(0, 0)
  })

  return (
    <>
 <Header/>
 <Riser modalMask={modalMask}/>
 <div className={modalvisible || submitModalMask ? "maska" : ""}/>
 </>  );
}

export default App;
