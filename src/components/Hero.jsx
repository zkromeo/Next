import React from 'react'
import Image from 'next/image'
import hero from '../images/hero.png'

function Hero() {
    return (
        <section className=" bg-[#285788] ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="  mb-4  heading text-[20px] sm:text-[30px] md:text-[25px] md-a:text-[35px] lg:text-[40px] xl:text-[52px] text-[#fff] leading-none w-[70%] md:w-[100%] md-a:w-[90%] lg:w-[100%] xl:w-[70%]">Stunning Product

                        Photos Faster and
                        Cheaper

                        {/* <br className="hidden lg:inline-block" />readymade gluten */}
                    </h1>
                    <p className="mb-8 leading-relaxed para text-[rgba(255,255,255,0.8)] text-[12px] sm:text-[18px]  w-[70%] md:w-[95%] xl:w-[70%] xl-a:w-[55%] ">AI-generated photos to boost your sales.
                        From a single product image to studio quality photos.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-[#063C75] bg-[white] border-0 py-2 px-6 focus:outline-none  rounded-full text-lg btn-text">Try it for free</button>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        src={hero}
                        width={500}
                        height={500}
                        alt='hero image'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
