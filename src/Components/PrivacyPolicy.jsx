"use client"
import BlueLogo from './assets/blueLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Syne } from 'next/font/google'
import { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '800'] 
})

const PrivacyPolicy = () => {
  const [hamMenu, setHamMenu] = useState(false)
  return (
    <div className='px-10 lg:px-20 xl:px-40 pt-5 mb-10'>
      <nav className='flex items-center justify-between'>
        <div className='flex gap-10'>
          <Link href='/' className='flex items-center gap-3'>
            <Image weight={20} height={20} alt='logo' src={BlueLogo} />
            Cyber Surakshit
          </Link>

          <Link className='hidden md:inline' href='/about'>About</Link>
          <Link className='hidden md:inline' href='/privacypolicy'>Privacy Policy</Link>
        </div>

        <div>
          <button className={`${syne.className} font-extrabold bg-blue px-10 py-2 text-white rounded-md hover:bg-opacity-80 duration-200 shadow-md hidden md:inline`}><Link href="https://chat.cybersurakshit.org">KABIR</Link></button>
          <button className='bg-black text-white px-10 py-2 rounded-md hover:bg-opacity-60 duration-200 ml-10 shadow-md hidden md:inline'>Chat on Whatsapp</button>

          <RxHamburgerMenu onClick={() => setHamMenu(true)} className="md:hidden text-4xl cursor-pointer hover:bg-black hover:bg-opacity-30 p-1 rounded-sm duration-200" />
        </div>

        <div className={`absolute w-full top-0 left-0 bg-white text-black px-5 py-3  flex-col gap-3 ${ hamMenu ? "flex" : "hidden"} shadow-md`}>
          <RxCross1 onClick={() => setHamMenu(false)} className="absolute top-3 right-5 cursor-pointer" />
          <Link className="block" href="/about">  About </Link>
          <Link className="block" href="/privacypolicy"> Privacy Policy </Link>

          <button className={`${syne.className} bg-blue px-10 py-2 text-white rounded-md hover:bg-opacity-80 duration-200 shadow-md w-1/2`}><Link href="https://chat.cybersurakshit.org">KABIR</Link></button>

          <button className="bg-black px-3 py-2 rounded-md hover:bg-opacity-60 duration-200 w-1/2 text-white">
            Chat on Whatsapp
          </button>
      </div>
      </nav>

      <h1 className={`${syne.className} text-5xl text-blue mt-20`}>Privacy Policy</h1>
      <p className='block mt-5'>At <span className='font-semibold'>Cyber Surakshit</span>, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose personal information that we collect through our AI-based chatbot, KABIR, designed to assist victims of cybercrime. By using KABIR, you agree to the terms of this Privacy Policy.</p>

      <p className='block mt-5'>Collection and Use of Personal Information When you use KABIR, we never collect any personal information from you, including your name, contact information, and details about your experience with cybercrime or anyother stuff. We are a big supported of privacy and we will never store any of your information.</p>

      <p className='block mt-5'>Disclosure of Personal Information We do not store, sell, rent, or share your personal information with third parties without your consent. However we have used OpenAI's API and incase they store any information then we aren't liable for that. </p>

      <p className='block mt-5'>Security We take reasonable measures to protect your personal information from loss, theft, and unauthorised access, disclosure, alteration, and destruction. We use industry-standard encryption technologies and maintain appropriate security measures to ensure the confidentiality and integrity of your personal information.</p>

      <p className='block mt-5'>Third-Party Links KABIR may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of these third-party websites or services. We encourage you to review the privacy policies of these third-party websites or services before providing any personal information.</p>

      <p className='block mt-5'>Changes to Privacy Policy We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post a notice on KABIR and update the &#34;last updated&#34; date at the top of this page to indicate when the Privacy Policy was last revised.</p>

      <p className='block mt-5'>Contact Us If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at cybersurakshit@gmail.com.</p>
    </div>
  )
}

export default PrivacyPolicy