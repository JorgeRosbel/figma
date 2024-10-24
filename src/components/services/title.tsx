

interface Info{
    title:string;
    text:string;
}

export const Title:React.FC<Info> = ({title,text}) => {

    return(
        <div className={`
            grid w-full grid-cols-10 auto-rows-auto gap-[40px]
            justify-items-center
            sm:justify-items-start place-items-center`}>
            <h2 className={`
                bg-alt text-main text-[40px] 
                rounded-[7px] px-[7px] font-[600] col-span-10 sm:col-span-3`}>{title}</h2>
            <p className="max-w-[580px] text-main text-[18px] col-span-10 sm:col-span-6 text-center sm:text-start">
               {text}
            </p>
        </div>
    )
}