import React from 'react'
import Image from 'next/image'
import BlueLogo from './assets/blueLogo.png'
import AboutMascot from './assets/aboutMascot.png'
import Link from 'next/link'
import { Syne } from 'next/font/google'
//icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';

const syne = Syne({
  subsets: ['latin'],
  weight: ['800'] 
})

export default function About() {
  return (
    <div className='px-40 pt-5 mb-10'>
      <nav className='flex items-center justify-between'>
        <div className='flex gap-10'>
          <Link href='/' className='flex items-center gap-3'>
            <Image weight={20} height={20} alt='logo' src={BlueLogo} />
            Cyber Surakshit
          </Link>

          <Link href='/about'>About</Link>
          <Link href='/privacypolicy'>Privacy Policy</Link>
        </div>

        <div>
          <button className={`${syne.className} bg-blue px-10 py-2 text-white rounded-md hover:bg-opacity-80 duration-200 shadow-md`}>KABIR</button>
          <button className='bg-black text-white px-10 py-2 rounded-md hover:bg-opacity-60 duration-200 ml-10 shadow-md'>Chat on Whatsapp</button>
        </div>
      </nav>

      <h1 className='text-4xl mt-20 text-blue font-bold '>ABOUT</h1>
      <h1 className={`${syne.className} text-6xl text-blue `}>KABIR</h1>

      <div className="flex justify-between items-start">
        <div className='w-2/3'>
          <p className='block mt-5'>Welcome to <span className='font-bold'>KABIR</span>, the Knowledgeable AI-Based Investigative Robot designed to assist victims of cybercrime.</p>

          <p className='block mt-5'>KABIR is an innovative chatbot that leverages the latest advances in artificial intelligence and machine learning to help individuals and organisations who have been impacted by cybercrime. With KABIR, you can quickly and easily report incidents of cybercrime, and receive guidance and support on how to respond and recover from these events.</p>

          <p className='block mt-5'>Our team at Cyber Surakshit and Basically AI designed KABIR to be highly responsive, reliable, and accurate in its analysis and investigation of cybercrime. Whether you are dealing with a phishing attack, data breach, or other online security threat, KABIR can provide you with the insights and resources you need to protect yourself and your business.</p>

          <p className='block mt-5'>At Cyber Surakshit with KABIR, we are committed to helping victims of cybercrime by providing them with the tools and support they need to recover and move forward. Our goal is to make the online world a safer place for everyone, and we believe that our innovative chatbot is an important step in achieving this objective.</p>
          
          <p className='block mt-5'>Thank you for choosing KABIR, and please don&#39;t hesitate to contact us if you have any questions or concerns about cybercrime.</p>
        </div>

        <div>
          <Image width={300} className=' -mt-20' src={AboutMascot} />

          <div className="flex gap-5 ml-5 mt-4">
            <AiOutlineInstagram className='bg-blue rounded-full text-white text-4xl p-2 ' />
            <BsTwitter className='bg-blue rounded-full text-white text-4xl p-2 ' />
            <AiFillYoutube className='bg-blue rounded-full text-white text-4xl p-2 ' />
            <AiFillLinkedin className='bg-blue rounded-full text-white text-4xl p-2 ' />
            <ImFacebook className='bg-blue rounded-full text-white text-4xl p-2 ' />
          </div>
        </div>
      </div>
    </div>
  )
}
