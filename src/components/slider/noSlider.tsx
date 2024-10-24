import { MdOutlineArrowOutward } from "react-icons/md";

const Card: React.FC<{border:boolean, text:string}> = ({border,text}) => {

    return (
        <div className={`flex flex-col items-start justify-between gap-[20px] ${border && "border-r-[2px] border-back/40 border-solid"}`}>
            <p className="text-back text-[18px] max-w-[256px]">
                {text}
            </p>
            <a href="#">
                <button className="text-alt flex items-center text-[20px] justify-center">Learn more <MdOutlineArrowOutward /></button>
            </a>
        </div>
    )
}

export const NoSlider:React.FC = () => {

    return(
        <article className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-[40px] px-[60px] py-[70px] bg-main gap-[120px]">
           <Card border={true} text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
           <Card border={true} text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
           <Card border={false} text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
        </article>
    )
}