import DoubleArrowIcon from "../../icon/DoubleArrowIcon";
import MoreIcon from "../../icon/MoreIcon";

export interface secondlayoutProps {
    id: string,
    title: string;
    icon?: any;
    todayPrice?: string;
    yesterdayPrice?: string;
    thisweekPrice?: string;
    lastWeekPrice?: string;
  }
export const secondlayoutData: secondlayoutProps[] = [
    {
        title: "Total transfer",
        id: "1",
        todayPrice:"₦500" ,
        yesterdayPrice:'₦200',
        thisweekPrice:"₦500",
        lastWeekPrice:"₦200",
        icon:<MoreIcon/>

    },
    {
        title: "Total inflow",
        id: "2",
        todayPrice:"₦2,000,000" ,
        yesterdayPrice:'₦5,000,000',
        thisweekPrice:"₦5,000,000",
        lastWeekPrice:"₦5,000,000",
        icon:<MoreIcon/>

    },
    {
        title: "Total transactions",
        id: "3",
        todayPrice:"₦2,000,000" ,
        yesterdayPrice:'₦5,000,000',
        thisweekPrice:"₦5,000,000",
        lastWeekPrice:"₦5,000,000",
        icon:<MoreIcon/>

    },
    {
        title: "Transaction count",
        id: "4",
        todayPrice:"₦2,000,000" ,
        yesterdayPrice:'₦5,000,000',
        thisweekPrice:"₦5,000,000",
        lastWeekPrice:"₦5,000,000",
        icon:<MoreIcon/>
    },
   
]