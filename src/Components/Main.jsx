import React from 'react'
import { Inter, Syne } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './assets/logo.png'
import Bot from './assets/bot.png'
import Pfp from './assets/pfp.png'

const syne = Syne({
  subsets: ['latin'],
  weight: ['800'] 
})

export default function Main() {
  return (
    <div className={` min-h-screen min-w-screen bg-blue text-white px-40 pt-10 overflow-hidden`}>
      <nav className='flex items-center justify-between'>
        <div className='flex gap-10'>
          <Link href='/' className='flex items-center gap-3'>
            <Image weight={20} height={20} alt='logo' src={Logo} />
            Cyber Surakshit
          </Link>

          <Link href='/about'>About</Link>
          <Link href='/privacypolicy'>Privacy Policy</Link>
        </div>

        <button className='bg-black px-10 py-3 rounded-md hover:bg-opacity-60 duration-200'>Chat on Whatsapp</button>
      </nav>

      <div className="flex justify-between items-center">
        <div>
          <h1 className={`${syne.className} text-6xl`}>KABIR</h1>
          <p className='w-3/4 opacity-70 mt-4'>Knowledgeable Artificial Intelligence Bot for Investigating and Resolving cybercrimes</p>

          <button className='bg-white text-black px-20 py-3 rounded-md mt-10 font-medium shadow-md'>GET STARTED</button>

          <p className='mt-12'>Already helped more than 1000+ users 💙</p>
          
          <div className="flex gap-3 mt-5 w-3/4 flex-wrap">
            
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          <Image src={Pfp} />
          </div>
        </div>

        <Image height={400} width={400} alt="Bot" src={Bot} />
      </div>

    </div>
  )
}
