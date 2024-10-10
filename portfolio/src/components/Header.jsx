import React from 'react'
import pdf from '../assets/Resume.pdf'

const Header = () => {
    return (
        <div>
            <div>
                <div className='py-20 flex justify-center '>
                    <div className='text-center space-y-2'>
                        <h1 className='font-extrabold text-[#332e2e] text-3xl leading-8 pb-2 '>I am Mehul Thummar</h1>
                        <h1 className='font-serif text-[#332e2e] text-xs leading-4 pb-2 border-b border-dashed border-y-green-700'>Freelance MERN stack developer specialising in tailwind css and components design.</h1>
                        <div>
                            <a
                                href={pdf}
                                target="_blank"
                                download="resume.pdf"
                                onClick={(e) => {
                                    window.open(pdf, '_blank')
                                }}
                            >
                                <button type="button" download="../Resume.pdf"
                                    class="text-white bg-black font-medium rounded-lg text-sm px-3 py-1 text-center ">Download</button>
                            </a>
                        </div>
                    </div>
                    {/* <img class="max-w-40 transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
                        // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                        // src={image1}
                        src={image2}
                        alt="image description" /> */}
                    {/* <div class="animate-morph bg-gradient-to-r from-purple-700 to-pink-700 p-4">
                        <img src={image2}
                            alt="Center Image"
                            class="rounded-full w-52 h-52 object-cover cursor-pointer filter grayscale hover:grayscale-0" />
                    </div> */}
                </div>
            </div >
        </div >
    )
}

export default Header
