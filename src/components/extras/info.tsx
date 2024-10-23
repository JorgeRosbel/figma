import image from "@assets/bola.svg"

export const Info:React.FC = () => {


    return(
        <section className={`
        w-full max-w-res bg-back rounded-[45px] px-[50px] py-[50px] sm:px-[60px] sm:py-0
        grid place-content-center justify-items-center grid-cols-1
        sm:grid-cols-2`}>
            <div className="flex flex-col items-center sm:items-start justify-center w-full gap-[20px]">
                <h2 className="text-main text-[26px] font-semibold max-w-[290px] sm:max-w-[500px]">Let&apos;s make things happen</h2>
                <p className="text-main text-[16px] max-w-[290px] sm:max-w-[500px]">
                    Contact us today to learn more about how our digital marketing services 
                    can help your business grow and succeed online.
                </p>
                <button className="text-back rounded-[14px] w-[290px]  px-[35px] py-[20px] bg-main" >
                    Get your proposal
                </button>
            </div>
            <img src={image} alt="image" className="hidden sm:block" />
        </section>
    )
}