import {  } from "../../../../public/assets/mock/layouts/secondLayout"
import { thirdlayoutData, thirdlayoutProps } from "../../../../public/assets/mock/layouts/thirdlayout"
import style from "./styles/thirdlayout.module.scss"
const ThirdLayout =()=>{
    return(
        <div className={style.container}>
        {thirdlayoutData?.map((x:thirdlayoutProps, idx:number)=>(
            <div key={idx}>
                <div className={style.boxWrapper}>
                    <div className={style.box1}>
                    <p>{x?.title}</p>
                    <button>Today {x?.icon}</button>
                </div>
            <div className={style.box2}>
                    <div>
                     
                        <span className={style.spanBox}> 
                            {x?.key ==="Successful" &&
                             <div className={style.successBox}/>}{x?.key}</span>
                       
                    <p>{x?.value}</p>
                    </div>
                    <div><span  className={style.spanBox}>{x?.prefix ==="Failed" && <div className={style.FailedBox}/>} {x?.prefix}</span>
                    <p>{x?.count}</p></div>
                </div>
                
               
                </div>
            </div>
        ))}
        </div>
    )
}

export default ThirdLayout