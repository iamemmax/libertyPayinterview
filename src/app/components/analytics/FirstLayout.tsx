"use client"
import EyeIcon from "../../../../public/assets/icon/EyeIcon"
import LayoutIccons from "../../../../public/assets/icon/layoutIcons"
import { firstlayoutData, firstlayoutProps } from "../../../../public/assets/mock/layouts/fistlayout"
import styles from "./styles/firstlayoutStyles.module.scss"
import {useState} from "react"

const FirstLayout =() =>{
const [visible, setVisible] = useState(true)

return(
    <div className={styles.container}>
        <div className={styles.wallets}>
            {/* <div> */}
{/* <LayoutIccons/> */}

                <span>Wallet Balance</span>
                <div className={styles.amtBox}>
                    <p>{visible ? "₦50,000.00": "*************"}</p>
                    <EyeIcon onClick={()=>setVisible((prev)=> !prev)} style={{cursor:"pointer"}}/>
                </div>
                <div className={styles.buttonGroup}>
                    <button>Add fund</button>
                    <button>Withdraw</button>
                </div>
            {/* </div> */}
        </div>

        {/* <div className={styles.rightLayout}> */}
            {firstlayoutData?.map((x:firstlayoutProps, idx:number)=>(
                <div key={idx} className={styles.boxContainer}>
                    <div className={styles.middleBox}>

                    <p>{x?.title}</p>
                    <h2>{x?.price}</h2>
                    </div>
                    <div className={styles.details}>
                        <p>View details</p>
                        {x?.icon}
                    </div>
                </div>
            ))}
        {/* </div> */}
    </div>
)
}

export default FirstLayout