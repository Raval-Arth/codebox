import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='w-full relative h-screen overflow-hidden'>
            <Image src={"/hero.gif"} alt="hero" width={1000} height={1000}
                className='w-full h-full object-cover absolute inset-0' />

            <div className="absolute w-full flex flex-col items-center mt-24">
                <h2 className='font-bold text-white text-7xl font-game' style={{
                    textShadow: "2px 2px 0px #000, -2px -2px 0 #000, 2px -2px 0 #000"
                }}>Start your</h2>
                <h2 className='font-bold text-8xl font-game text-yellow-400'
                    style={{
                        textShadow: "2px 2px 0px #000, -2px -2px 0 #000, 2px -2px 0 #000"
                    }}>Coding Journey</h2>
                <h2 className='mt-5 font-game text-3xl'> Beginner friendly and easy to learn coding course and project</h2>

                <Button className='mt-7 p-6 font-game text-3xl' variant={'pixel'}>Start Learning</Button>
            </div>
        </div>
    )
}

export default Hero