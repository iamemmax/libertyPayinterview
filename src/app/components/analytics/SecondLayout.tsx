import { secondlayoutData, secondlayoutProps } from "../../../../public/assets/mock/layouts/secondLayout"
import style from "./styles/secondLayoutStyles.module.scss"
const Secondlayout =()=>{
    return(
        <div className={style.container}>
        {secondlayoutData?.map((x:secondlayoutProps, idx:number)=>(
            <div key={idx}>
                <div className={style.boxWrapper}>
                    <div className={style.box1}>
                    <p>{x?.title}</p>
                    <button>More {x?.icon}</button>
                </div>
            <div className={style.box2}>
                    <div><span>Today</span>
                    <p>{x?.todayPrice}</p></div>
                    <div><span>Yesterday</span>
                    <p>{x?.yesterdayPrice}</p></div>
                </div>
            <div className={style.box3}>
                    <div><span>This week</span>
                    <p>{x?.thisweekPrice}</p></div>
                    <div><span>Last week</span>
                    <p>{x?.lastWeekPrice}</p></div>
                </div>
               
                </div>
            </div>
        ))}
        </div>
    )
}

export default Secondlayout