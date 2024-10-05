import React from 'react'
import image1 from "../assets/mehul.jpg"
import image2 from "../assets/mehul1.jpg"



const Header = () => {
    return (
        <div>
            <div>
                <div className='py-20 flex justify-center '>
                    <div className='w-60 flex items-center '>
                        <h1 className=' font-extrabold text-[#332e2e] text-3xl leading-8 pb-2 border-b border-dashed border-black'>I am Mehul Thummar</h1>
                    </div>
                    {/* <img class="max-w-40 transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
                        // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                        // src={image1}
                        src={image2}
                        alt="image description" /> */}
                    <div class="animate-morph bg-gradient-to-r from-purple-700 to-pink-700 p-4">
                        <img src={image2}
                            alt="Center Image"
                            class="rounded-full w-52 h-52 object-cover cursor-pointer filter grayscale hover:grayscale-0" />
                    </div>
                    <div className=' w-60 '>
                        <h1 className='font-serif text-[#332e2e] text-xs pl-16 leading-4 pb-2 border-b border-dashed border-black'>Freelance MERN stack developer specialising in tailwind css and components design.</h1>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header
