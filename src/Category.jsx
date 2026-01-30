import { TiThSmall } from "react-icons/ti";
import {MdEmojiFoodBeverage, MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiHamburger,GiFullPizza } from "react-icons/gi";

export const categories = [
    {
        id: 1,
        name: "All",
        icon:<TiThSmall className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 2,
        name: "Breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 3,
        name: "Soups",
        icon:< LuSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id: 4,
        name: "Noodles",
        icon:< CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id: 5,
        name: "Main-Course",
        icon:<IoFastFoodOutline className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 6,
        name: "Pizza",
        icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id: 7,
        name: "Burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id: 8,
        name: "Beverage",
        icon:<MdEmojiFoodBeverage  className="w-[60px] h-[60px] text-green-600"/>
    }
]