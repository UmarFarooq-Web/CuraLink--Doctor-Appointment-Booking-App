import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500' >
        <p>About <span className='text-gray-700 font-medium' >US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12' >
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600' >
          <p>Welcome to CuraLink! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum officiis unde ipsam ea harum veritatis enim! Veniam, molestiae amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, totam. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis et id temporibus culpa voluptatum quam, neque, magni molestiae aut, numquam nihil sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime. </p>
          <b className='text-gray-800' >Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde, rerum dolores, fugiat nisi nulla, eveniet veniam maiores soluta alias molestiae sint laudantium? Recusandae corporis labore et, iste facilis nihil? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dignissimos. </p>
        </div>
      </div>

      <div className='text-xl my-4' >
        <p>WHY <span className='text-gray-700 font-semibold' >CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20' >

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col  gap-5  text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ' >
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente architecto assumenda repellendus.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col  gap-5  text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ' >
          <b>Convenience:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, aliquam.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col  gap-5  text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ' >
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, eveniet cumque! Repudiandae.</p>
        </div>

      </div>


    </div>
  )
}

export default About
