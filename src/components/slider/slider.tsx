import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";

interface CardInfo{
    text:string;
}

export const SliderCard:React.FC<CardInfo> = ({text}) => {


    return(
        <article className={`
        bg-main text-back text-[16px] min-w-full w-full h-[252px] px-[50px] 
        py-[42px] rounded-[42px] flex flex-col items-start gap-[20px] sticky left-0 slider-center`}>
            <p>{text}</p>
            <span className="text-alt flex items-center text-[20px] justify-center">Learn more <MdOutlineArrowOutward /></span>
        </article>
    )
}


export const Slider:React.FC = () => {
    const [page,setNextPage] = useState<{page:number,css:string}>({page:0,css:"translate-x-0"});

    const handlePage = () =>{
        setNextPage(prev => {
            const newPage = prev.page > 100 ? 0 : prev.page + 100; // Calcula el nuevo valor de page
            return {page: newPage, css: `-translate-x-[${newPage}%]`} // Usa newPage aquí
        });
    };

    return(
        <div id="--slider" onClick={handlePage} className={`w-full flex items-center  gap-2 p-1 ${page.css} transition-all duration-300 ease-in-out`}>
            <SliderCard text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            <SliderCard text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            <SliderCard text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
        </div>
    )
}


export const Slider2:React.FC = () => {

    return(
        <div id="--slider" className={`
        w-full flex items-center relative  
        gap-2 p-1 overflow-scroll transition-all duration-300
        slider `}>
            <SliderCard text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            <SliderCard text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            <SliderCard text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
        </div>
    )
}