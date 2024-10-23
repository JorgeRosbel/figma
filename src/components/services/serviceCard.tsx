import btn from "@assets/Icon.svg"
import btn_2 from "@assets/icon-2.svg"


interface Card{
    title:string;
    image:string;
    className?:string;
    titleColor:string;
    titleBack:string;
    textColor?:string;

}

export const ServiceCard:React.FC<Card> = ({title,image,className,titleColor,titleBack,textColor}) => {

    return(
        <article className={
            `${className} w-full max-w-[600px] min-h-[310px] rounded-2xl border
             border-black p-[50px] shadow-[0px_3px_2px_rgba(0,0,0,0.9)]
             flex items-center justify-between`
        }>
            <div className="flex flex-col items-start sm:items-center justify-between text-start h-full w-full gap-3">
                <span className={`${titleColor} p-1 text-[30px] h-min rounded-lg max-w-[221px] ${titleBack} font-semibold`}>{title}</span>
                <div className="flex items-end justify-between w-full">
                    <button className="flex items-center justify-center gap-2">
                        <img src={textColor === "text-back" ? btn_2 : btn} alt="icon-btn" />
                        <span className={`font-[500] ${textColor} hidden sm:block`}>Learn more</span>
                    </button>
                    <img src={image} width="165" height="129" className="w-[165px] h-[129px] sm:hidden" alt={`image-${title}`} />
                </div>
                
            </div>
            <img src={image} width="210" height="170" className="w-[210px] h-[170px] hidden sm:block" alt={`image-${title}`} />

        </article>
    )
}