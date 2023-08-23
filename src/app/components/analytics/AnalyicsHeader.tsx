"use client"
import CaretDownIcon from "../../../../public/assets/icon/Caretdown"
import NotificationIcon from "../../../../public/assets/icon/Notification"
import styles from "./styles/headerStyles.module.scss"
import {useState} from"react"
import Profilepix from "../../../../public/assets/icon/ProfilePix"

const AnalyticsHeader = ()=>{

    return(
        <div className={styles.container}>
            <h3>Analytics dashboard</h3>
            <div className={styles.rightbox}>
                <div className={styles.iconBtn}>
                    <NotificationIcon/>
                </div>
                <div className={styles.profileBox}>
               <div>
                    <Profilepix/>
                </div>
               <div>
                    <p>Dexter Olaniyi</p>
                    <span>Dexterola@gmail.com <CaretDownIcon/></span>
                </div>
               </div>
            </div>
        </div>
    )
}
export default AnalyticsHeader