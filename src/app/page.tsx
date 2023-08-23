"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import {useEffect, useState} from "react"
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
 const [show, setShow]=useState(false)
  
  return (
   <div className={styles.container}>
    <div className= {!show ?styles.left :styles.toggle }>
     <Header setShow={setShow} show={show}/>
    
     <Navigation setShow={setShow}/>

      </div> 
      
    {!show && <button className={styles.showBtn} onClick={()=>setShow(!show)}>Menu</button>}
    <div className={styles.right}>
      {children}
    </div>
   </div>
  )
}
