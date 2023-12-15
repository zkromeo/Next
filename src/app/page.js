import Image from 'next/image'
import Hero from '@/components/Hero'
import LogoSection from '@/components/LogoSection'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import Subscribe from '@/components/Subscribe'
import Carousel from '@/components/Carousel'
import Testimonial from '@/components/Testimonial'
export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <LogoSection />
      <Testimonial/>
      <Services />
      <Partners />
      <Subscribe />
    </main>
  )
}
