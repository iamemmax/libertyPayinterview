"use client";
import styles from "./styles.module.scss"
import {Dispatch, SetStateAction} from "react"

interface props {
    setShow:Dispatch<SetStateAction<boolean>>;
    show:boolean
}
const Header = ({setShow,show}:props) =>{
    return(
        <div className={styles.container_wrapper}>

<div className={styles.container}>
   <div> <h1>Playbox</h1>
    <p>by LibertyPay</p></div>
  {show &&  <button onClick={()=>setShow(false)}>X</button>}
  
        </div>
        <div className={styles.bottomLine}/>
</div>
    )
}

export default Header