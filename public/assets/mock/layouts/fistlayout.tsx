import DoubleArrowIcon from "../../icon/DoubleArrowIcon";

export interface firstlayoutProps {
    id: string,
    title: string;
    icon?: any;
    price?: string;
  }
export const firstlayoutData: firstlayoutProps[] = [
    {
        title: "Total savings balance",
        id: "1",
        price:"₦194,000" ,
        icon:<DoubleArrowIcon/>

    },
    {
        title: "Analytics Dashboard",
        id: "2",
        price:"₦919" ,
        icon:<DoubleArrowIcon/>
       

    },
    {
        title: "Total POS",
        id: "3",
        price:"0" ,
        icon:<DoubleArrowIcon/>
       

    },
]