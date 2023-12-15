import React from 'react'
import Image from 'next/image'
import france from '../images/logos/logo4.png'
import station from '../images/logos/logo5.png'
import wilco from '../images/logos/logo6.png'
import french from '../images/logos/logo7.png'

function Partners() {
    const partnerlogos = [
        {
            src: france,
            alt: 'france'
        },
        {
            src: station,
            alt: 'station'
        },
        {
            src: wilco,
            alt: 'wilco'
        },
        {
            src: french,
            alt: 'french'
        },
    ]
    return (
        <div>

            <div className="logo-section py-20">
                <h2 className="heading text-center text-[#000] mb-2 uppercase text-[18px] md:text-[25px] lg-a:text-[36px]">they support us</h2>
                <div className="mt-8  relative">
                <svg className='absolute right-20 bottom-[-40px] hidden md:block' xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 164 175" fill="none">
  <rect width="188.051" height="25.6702" rx="12.8351" transform="matrix(0.746992 -0.664833 0.562124 0.827053 0 125.022)" fill="#063C75" fill-opacity="0.08"/>
  <rect width="130.961" height="17.877" rx="8.93852" transform="matrix(0.746992 -0.664833 0.562124 0.827053 55.9004 147.456)" fill="#063C75" fill-opacity="0.08"/>
  <rect width="61.8259" height="17.877" rx="8.93852" transform="matrix(0.746992 -0.664833 0.562124 0.827053 107.446 160.215)" fill="#063C75" fill-opacity="0.08"/>
</svg>
                    <ul className="flex gap-x-10 gap-y-4 flex-col sm:flex-row items-center justify-center md:gap-x-[200px]">
                        {
                            partnerlogos.map((item, i) => (
                                <li key={i}>
                                    <Image className="bg-blend-color-burn " src={item.src} alt={item.alt} />
                                </li>
                            ))
                        }
                        
                    </ul>
                    <div className='text-center mt-3'>
                    <button className="inline-flex text-[#fff] bg-[#063C75] border-0 py-2 px-6 focus:outline-none  rounded-full text-lg btn-text m-auto">Try it for free</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Partners
