import { Title } from "@components/services/title";
import { Slider2 } from "./slider";
import { NoSlider } from "./noSlider";

export const SliderContent:React.FC = () => {


    return(
        <section id="case-studies" className="w-full max-w-res flex flex-col items-center gap-6 mt-[40px]">
            <Title title="Case Studies" text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
            {window.innerWidth <=720 ? <Slider2/> : <NoSlider />}
        </section>
    )
}