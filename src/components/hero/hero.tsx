import Image from "@assets/Illustration.svg"

export const Hero:React.FC = () => {

    return(
        <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly w-full px-5 ">
            <div className="flex flex-col items-center lg:items-start justify-center lg:w-[531px]">
                <h1 className="text-[43px] font-[500]">Navigating the digital landscape for success</h1>
                <img src={Image} alt="imagen" width="361" height="310" className="lg:hidden w-auto h-auto" />
                <p className="text-[1rem] ">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button className="w-[350px] h-[68px] lg:w-[264px] flex items-center justify-center bg-main text-white rounded-[14px] mt-6 text-[20px]">
                    Book a consultation
                </button>
            </div>
            <img src={Image} alt="imagen"  width="361" height="310" className="hidden lg:block w-[600px]" />
        </section>
    )
}