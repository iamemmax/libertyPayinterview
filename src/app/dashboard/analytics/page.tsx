import AnalyticsHeader from "@/app/components/analytics/AnalyicsHeader"
import FirstLayout from "@/app/components/analytics/FirstLayout"
import LastLayout from "@/app/components/analytics/LastLayout"
import Secondlayout from "@/app/components/analytics/SecondLayout"
import ThirdLayout from "@/app/components/analytics/ThirdLayout"
import HomeLayout from "@/app/page"

const  Analysis =()=>{
return(
    <HomeLayout>
             <AnalyticsHeader/>
             <FirstLayout/>
        <Secondlayout/>
        <ThirdLayout/>
        <LastLayout/>
   
       
        </HomeLayout>
)
}

export default Analysis