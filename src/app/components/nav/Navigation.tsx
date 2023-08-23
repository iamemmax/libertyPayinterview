"use client";
import {useState,useEffect, Dispatch, SetStateAction} from "react"
import Link from "next/link"
import { TopNav, lastNav, middleNav, topNav } from "../../../../public/assets/mock/nav"
import styles from "./styles.module.scss"

interface props {
    setShow:Dispatch<SetStateAction<boolean>>
}
const Navigation = ({setShow}:props) => {
   const [active, setActive] = useState(1)
   useEffect(()=>{
setActive(1)
   },[])
   const handleClick =(nav:TopNav) =>{
    setActive(Number(nav.id))
    setShow(false)
   }
    return (
        <div className={styles.container}>
            <div className={styles.topNav}>
                {

                    topNav?.map((nav: TopNav,idx:number) => (
                      <li key={idx}  onClick={()=>handleClick(nav)} className={active===Number(nav?.id) ?styles.active:styles.link}>
                          <Link href={nav?.link}><span>{nav.icon}</span><p>{nav?.title}</p></Link>
                      </li>
                    ))
                }
                <div className={styles.bottomLine}/>
            </div>

            <div className={styles.middleNav}>
                {
                    middleNav?.map((nav: TopNav,idx:number) => (
                        <li key={idx}  onClick={()=>handleClick(nav)} className={active===Number(nav?.id) ?styles.active:styles.link}>
                        <Link href={nav?.link}><span>{nav.icon}</span><p>{nav?.title}</p>
                        <span className={styles.rightnav}>{nav.iconRight}</span>
                        
                        </Link>
                    </li>
                    ))
                }
                <div className={styles.bottomLine}/>
            </div>
            <div className={styles.lastNav}>
            {
                    lastNav?.map((nav: TopNav,idx:number) => (
                        <li key={idx}  onClick={()=>handleClick(nav)} className={active===Number(nav?.id) ?styles.active:styles.link}>
                        <Link href={nav?.link}><span>{nav.icon}</span><p>{nav?.title}</p>
                        <span className={styles.rightnav}>{nav.iconRight}</span>
                        
                        </Link>
                    </li>
                    ))
                }
            </div>

        </div>
    )
}

export default Navigation