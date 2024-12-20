import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Text-generate-effect'
import HeroButton from './ui/HeroButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-32 h-screen' fill='white' />
                <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.05]  flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex justify-center relative my-20'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic with next.js
                    </h2>

                    <TextGenerateEffect words='Welcome to My Portfolio!' className='text-center text-[40px] md:text-5xl lg:text-6xl' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Sparsh, a Full Stack Developer with expertise in web development, as well as Android and iOS app development.
                    </p>

                    <a href="#about">
                        <HeroButton title={"Show My Work"} icon={<FaLocationArrow />} position='right' otherClasses='gap-2' />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Hero