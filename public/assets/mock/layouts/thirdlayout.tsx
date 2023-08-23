import DoubleArrowIcon from "../../icon/DoubleArrowIcon";
import MoreIcon from "../../icon/MoreIcon";

export interface thirdlayoutProps {
    id: string,
    title: string;
    icon?: any;
    key?: string;
    prefix?: string;
    value?: string;
    count?: string;
   
  }
export const thirdlayoutData: thirdlayoutProps[] = [
    {
        title: "Total Cashout",
        id: "1",
        value:"₦1,200,000" ,
        count:'₦1,200,000',
        key:"Today",
        prefix:"Yesterday",
        icon:<MoreIcon/>

    },
    {
        title: "Transaction status",
        id: "2",
        value:"442" ,
        count:'18',
        key:"Successful",
        prefix:"Failed",
        icon:<MoreIcon/>

    },
    {
        title: "Average transaction Count",
        id: "3",
        value:"₦20,400" ,
        count:'442',
        icon:<MoreIcon/>,
        key:"Value",
        prefix:"Count",

    },
    {
        title: "Total commission",
        id: "4",
        value:"₦87,000" ,
        count:'₦102,000',
        key:"POS commission",
        prefix:"Lotto commission",
        icon:<MoreIcon/>
    },
   
]