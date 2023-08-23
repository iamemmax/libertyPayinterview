import { Url } from "url";
import AngleRight from "../icon/AngleRight";
import BankIcon from "../icon/BankIcon";
import CardIcon from "../icon/CardIcon";
import HubIcon from "../icon/Hub";
import LeaderIcon from "../icon/Leader";
import PersonalIcon from "../icon/Personal";
import ProfileIcon from "../icon/Profile";
import TalentIcon from "../icon/Talent";
import DashbordIcon from "../icon/dashboard";
import HomeIcon from "../icon/home";

export interface TopNav {
    id: string,
    title: string;
    icon: any;
    iconRight?: any;
    link?: any;}
export const topNav: TopNav[] = [
    {
        title: "Home",
        id: "1",
        icon: <HomeIcon />,
        link: "#"
        // iconRight:<DashboardIcon/>

    },
    {
        title: "Analytics Dashboard",
        id: "2",
        icon: <DashbordIcon />,
        link: "/dashboard/analytics"

    }
]
export const middleNav: TopNav[] = [
    {
        title: "Personal",
        id: "3",
        icon: <PersonalIcon />,
        iconRight: <AngleRight />,
        link: "#"
    },
    {
        title: "Sale Hub",
        id: "4",
        icon: <HubIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },
    {
        title: "Talent management",
        id: "5",
        icon: <TalentIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },
    {
        title: "Spend management",
        id: "6",
        icon: <HubIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },
    {
        title: "Cards",
        id: "7",
        icon: <CardIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },
]

export const lastNav: TopNav[] = [
    {
        title: "Leaderboard",
        id: "8",
        icon: <LeaderIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },
    {
        title: "Profile & Settings",
        id: "9",
        icon: <ProfileIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },
    {
        title: "Bank performance",
        id: "10",
        icon: <BankIcon />,
        iconRight: <AngleRight />,
        link: "#"

    },

]