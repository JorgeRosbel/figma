import { Link } from "react-router-dom";



export const Menu:React.FC<{active:boolean}> = ({active}) => {

    return(
        <nav className={`
        ${!active ? "translate-x-full sm:translate-x-0": "-translate-x-0 sm:translate-x-0"}
        flex absolute flex-col items-center gap-[40px] 
        h-[420px] bg-white right-0 top-[70px] p-2
        lg:flex-row lg:static lg:h-full lg:p-0
        transition-all duration-300`}>

            <Link to="/figma" className="text-[20px]">About us</Link>
            <Link to="/figma" className="text-[20px]" >Services</Link>
            <Link to="/figma" className="text-[20px]">Use Cases</Link>
            <Link to="/figma" className="text-[20px]">Pricing</Link>
            <Link to="/figma" className="text-[20px]">Blog</Link>
            <button className="text-[20px] w-[231px] h-full flex items-center justify-center rounded-xl border border-black">
                Request a quote
            </button>
        </nav>
    )
}