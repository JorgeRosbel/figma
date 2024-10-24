import c1 from "@assets/Company logo.svg"
import c2 from "@assets/Company logo (1).svg"
import c3 from "@assets/Company logo (2).svg"
import c4 from "@assets/Company logo (3).svg"
import c5 from "@assets/Company logo (4).svg"


export const Company:React.FC = () => {

    const images = [c1,c2,c3,c4,c5]

    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 w-full max-w-res place-items-center justify-items-center py-7">
            { images.map((v,i) => <img key={i} src={v} alt={`image-${i}`} />) }
        </div>
    )
}