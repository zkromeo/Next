import React from 'react'
import Image from 'next/image'
import call from '../images/Call.png'
import message from '../images/Message.png'

function Footer() {
    return (
        <footer className="text-gray-600 body-font mt-5 mb-5">
            <div className="container  py-24 mx-auto flex flex-col  ">
                <h1 className="heading text-center text-[#fff] uppercase text-[18px] md:text-[25px] lg-a:text-[36px] footer-logo m-auto ">presti</h1>

            </div>

            <div className='border-t-[1px] border-[#C4BABA] py-5'>
                <p className="para text-center text-[#C4C7DB]">Copyright © 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
