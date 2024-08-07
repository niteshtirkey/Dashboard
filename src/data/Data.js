//Side imports
import { IoMdHome } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import { RiShoppingBag4Line } from "react-icons/ri";

//navbar

import { MdEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
//Dashboard
import { MdPlaylistAddCircle } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { BsBagXFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


// Sidebar Data
export const SidebarData = [
  {
    id: 1,
    icon: IoMdHome,
    heading: "Dashboard",
  },
  {
    id: 2,
    icon: MdOutlineAnalytics,
    heading: "Analytics",
  },
  {
    id: 3,
    icon: BsBookmarkCheck,
    heading: "Orders",
  },
  {
    id: 4,
    icon: CgBox,
    heading: "Customers",
  },
  {
    id: 5,
    icon: RiShoppingBag4Line,
    heading: "Products",
  },
];

// navbar profile

export const navdata = [
  { id: 1, icon: MdEmail },
  { id: 2, icon: IoSettingsOutline },
  { id: 3, icon: IoMdNotificationsOutline },
];

// Dashborad Card

export const CardsData = [
  {
    id: 1,
    icon: MdPlaylistAddCircle,
    total: "Total Orders",
    number: 75,
    val: IoMdArrowDropup,
    persentage: "3%",
    color: {
      backGround: "#0000ff4d",
    },
    green: {
      color: "rgb(6, 255, 8)",
    },
  },
  {
    id: 2,
    icon: IoBagCheck,
    total: "Total Deleivered",
    number: 70,
    val: IoMdArrowDropdown,
    persentage: "3%",
    color: {
      backGround: "#8ab88a",
    },
    green: {
      color: "red",
    },
  },
  {
    id: 3,
    icon: BsBagXFill,
    total: "Total Cancelled",
    number: "05",
    val: IoMdArrowDropup,
    persentage: "3%",
    color: {
      backGround: "orange",
    },
    green: {
      color: "rgb(6, 255, 8)",
    },
  },
  {
    id: 4,
    icon: FaFileInvoiceDollar,
    total: "Total Revenue",
    number: "$12K",
    val: IoMdArrowDropdown,
    persentage: "3%",
    color: {
      backGround: "pink",
    },
    green: {
      color: "red",
    },
  },
];

export const RightVal = [
  {
    title: "Net Profit",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "6759.15",
    png: "UilUsdSquare",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
];

export const NetData = [
  {
    title: "Net Profit",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: 6759.25,
    val: IoMdArrowDropup,
    valNum:'3%',
    values:"* The values here has been rounded off."
  },
];
