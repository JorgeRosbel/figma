import Logo from "@assets/logo.svg";
import { Menu } from "./menu";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

export const Header:React.FC = () => {
    const [menuVisible,setMenuVisible] = useState<boolean>(false)

    return(
        <header className="w-full max-w-res flex items-center justify-between h-[68px] mt-2 text-main relative pr-4 ">
            <img src={Logo} alt="Logotipo" width="220px" height="56px" className="w-[144px] h-[24px]  sm:w-[220px] sm:h-[56px]" />
            <IoMdMenu onClick={()=> setMenuVisible(!menuVisible)} className="text-[24px] cursor-pointer lg:hidden" />
            <Menu active={menuVisible} />
        </header>
    )
}