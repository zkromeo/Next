"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import hero from '../images/testimonial.png'
import mobiler from '../images/logos/logo8.png'
import convertible from '../images/logos/logo2.png'
import canape from '../images/logos/logo3.png'
import arrowLeft from '../images/icons/arrowLeft.png'
import arrowRight from '../images/icons/arrowRight.png'
function Testimonial() {

    const testimonials = [
        {
            src: mobiler,
            alt: 'mobiler',
            description: '“We were looking for a way to enhance our e-commerce presence with engaging visual content. PRESTI emerged as the optimal choice due to their swift delivery, high-quality results, and competitive pricing, which is why we chose to partner with them”',
            title: 'Head of Digital'
        },
        {
            src: convertible,
            alt: 'convertible',
            description: '“We were looking for a way to enhance our e-commerce presence with engaging visual content. PRESTI emerged as the optimal choice due to their swift delivery, high-quality results, and competitive pricing, which is why we chose to partner with them”',
            title: 'Head of Digital'
        },
        {
            src: canape,
            alt: 'canape',
            description: '“We were looking for a way to enhance our e-commerce presence with engaging visual content. PRESTI emerged as the optimal choice due to their swift delivery, high-quality results, and competitive pricing, which is why we chose to partner with them”',
            title: 'Head of Digital'
        }

    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };


    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="text-gray-600 body-font bg-[#E9FAFF] py-5 w-[90%] m-auto rounded-[36px]">
            <h2 className="heading text-[#000] text-center text-[18px] md:text-[25px] lg-a:text-[36px] mb-8">Words from our customers</h2>
            <div className=" mx-auto flex pl-[50px]  pr-2 pt-5 md:pt-0 md:flex-row flex-col items-center w-[90%] bg-[#fff] rounded-[36px]">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">


                    <div key={currentTestimonial}>

                        <Image className="object-cover object-center  w-[200px] xl:w-[280px] mx-auto  md:mx-0 mb-5" alt="hero" src={testimonials[currentTestimonial].src} />
                        <p className="  mb-5 para text-[15px] w-[100%] xl-a:w-[80%]">{testimonials[currentTestimonial].description}</p>
                        <h6 className='mb-8 heading text-[#000]'>{testimonials[currentTestimonial].title}</h6>

                    </div>

                    <div className="mt-8 flex justify-center">
                        <button onClick={prevTestimonial} className="px-2 py-2 bg-[#fff] border-[1px] border-[#063C75] rounded-[50%]"><Image src={arrowLeft} alt='arrow' /></button>
                        <button onClick={nextTestimonial} className="ml-4 px-2 py-2 bg-[#063C75] border-0  rounded-[50%] "><Image src={arrowRight} alt='arrow' /></button>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-5">
                    <Image className="w-[100%]" alt="hero" src={hero} />
                </div>
            </div>
        </section>
    )
}

export default Testimonial
