"use client";
import localFont from "next/dist/compiled/@next/font/dist/local";
import CancelIcon from "../../../../public/assets/icon/Cancleicon";
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
  {show &&  <button onClick={()=>setShow(false)}><CancelIcon fill="#fff" width={18} height={18}/></button>}
  
        </div>
        <div className={styles.bottomLine}/>
</div>
    )
}

export default Header