import { Title } from "./title";
import { ServiceCard } from "./serviceCard";
import image_1 from "@assets/card-1.svg";
import image_2 from "@assets/card-2.svg";
import image_3 from "@assets/card-3.svg";
import image_4 from "@assets/card-4.svg";
import image_5 from "@assets/card-5.svg";
import image_6 from "@assets/card-6.svg";

export const Services:React.FC = () => {

    return(
        <section className="w-full max-w-res px-2 mt-[70px] mb-[70px] flex flex-col gap-10">
            <Title 
                title="Services"
                text=" At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-content-center justify-items-center gap-[20px]">
                <ServiceCard title="Search engine optimization" image={image_1} className="bg-back"  titleColor="text-main" titleBack="bg-alt" />
                <ServiceCard title="Pay-per-click advertising"  image={image_2} className="bg-alt"  titleColor="text-main" titleBack="bg-back" />
                <ServiceCard title="Social Media Marketing" image={image_3} textColor="text-back" className="bg-main" titleColor="text-main" titleBack="bg-back" />
                <ServiceCard title="Email Marketing" image={image_4} className="bg-back"  titleColor="text-main" titleBack="bg-alt" />
                <ServiceCard title="Content Creation" image={image_5} className="bg-alt"  titleColor="text-main" titleBack="bg-back" />
                <ServiceCard title="Analytics and Tracking" image={image_6} textColor="text-back" className="bg-main" titleColor="text-main" titleBack="bg-back" />
               
            </div>
        </section>
    )
}