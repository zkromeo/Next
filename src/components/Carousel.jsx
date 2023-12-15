'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import slide1 from '../images/slider1.png'
import slide2 from '../images/slider2.png'
import slide3 from '../images/slider3.png'
// import sliderarrow from '../images/icons/sliderarrow.png'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



export default function CarouselComponent() {
    return <div className="bg-[#D8E4F1] rounded-[22px] px-[10%] py-8 " style={{ filter: ' drop-shadow(2px 4px 13px rgba(0, 0, 0, 0.14));' }}>
        <h2 className="heading text-center text-[18px] md:text-[25px] lg-a:text-[36px] mb-8">IT WORKS WITH ANY PRODUCT</h2>
        <div  ><Carousel className="h-[50vh]"
            showDots={true}
            responsive={responsive}
            

        >
            
            <Image src={slide1} height={300} alt="slider-image" />
            <Image src={slide2} height={300} alt="slider-image" />
            <Image src={slide3} height={300} alt="slider-image" />
            <Image src={slide1} height={300} alt="slider-image" />
            <Image src={slide2} height={300} alt="slider-image" />
            <Image src={slide3} height={300} alt="slider-image" />
        </Carousel></div>
    </div>
}