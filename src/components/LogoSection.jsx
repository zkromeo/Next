import React from 'react'
import Image from 'next/image'
import mobiler from '../images/logos/logo1.png'
import convertible from '../images/logos/logo2.png'
import canape from '../images/logos/logo3.png'
function LogoSection() {
    const logos = [
        {
            src: mobiler,
            alt: 'mobiler'
        },
        {
            src: convertible,
            alt: 'convertible-center'
        },
        {
            src: canape,
            alt: 'canape'
        }
    ]
    return (
        <div>

            <div className="logo-section py-20">
                <h2 className="heading text-center text-[#000] mb-5 uppercase text-[18px] md:text-[25px] lg-a:text-[36px]">they trust us</h2>
                <div className="mt-20 bg-[#F8F8F8] py-12">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-[200px]">
                        {
                            logos.map((item, i) => (
                                <li key={i}>
                                    <Image className="" height={35} src={item.src} alt={item.alt} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LogoSection
