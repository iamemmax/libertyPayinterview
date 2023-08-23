import ChartIcon from "../../../../public/assets/icon/Chart"
import MoreIcon from "../../../../public/assets/icon/MoreIcon"
import style from "./styles/lastLayout.module.scss"
const LastLayout = () =>{
    return(
        <div className={style.wrappers}>
           
            <div className={style.container}>
       
            <div>
                <div className={style.boxWrapper}>
                    <div className={style.box1}>
                    <p>Average commission per transaction</p>
                    <button>Today <MoreIcon/></button>
                </div>
            <div className={style.box2}>
                    <div>
                     
                        <span className={style.spanBox}> 
                        POS commission</span>
                       
                    <p>₦500</p>
                    </div>
                    <div><span> Lotto commission</span>
                    <p>₦200</p></div>
                </div>
                
               
                </div>
            </div>
    
        
            </div>
            <div className={style.chartContainer}>
<div className={style.infoBox}>
<p>Transaction Comparative</p>
<div className={style.sendBox}>
    
    <span className={style.sendMoney}> <div/> Send money</span>
    <h3>₦105,000,000</h3>

</div>

<div className={style.CashoutBox}>
    <div>
    <span> <div className={style.cashbarge}/>Cashout</span>
    <h2>₦12,00,000</h2>
    </div>
    <div>
    <span> <div className={style.utilbarge}/>Utilities and Bills</span>
    <h2>₦4,200,000</h2>
    </div>
</div>
</div>
<div className={style.iconBox}><ChartIcon/></div>
            </div>
        </div>
    )
}
export default LastLayout