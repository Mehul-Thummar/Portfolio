import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            <footer class="w-full py-14">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto space-y-3">
                        <div class="text-lg text-center flex-col space-y-4 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-7 border-b border-gray-200">
                            <h1 className='text-2xl font-bold '>Contact Me</h1>
                            <div className='text-start space-y-3'>
                                <h1 className='text-lg font-bold '>Let's Work Together</h1>
                                <p className='text-sm'>My work has never disgusted me.Over my career, I have tended to work best from the back side of the screen.
                                    I have experience in the banking industry as well.I frequently find myself bridging ideas and individuals in the liminal areas. I can see gaps and turn them into opportunities because I have a natural ability to jump viewpoints.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center space-x-8'>
                            <a href="https://github.com/" target="_blank" class=" text-gray-900 ">
                                <FaGithub class="size-8 text-black  dark:text-black hover:scale-110 duration-500" />
                            </a>
                            <a href="https://www.linkedin.com/in/thummar-mehul-22016932b/" target="_blank" class=" text-gray-900 ">
                                <CiLinkedin class="size-9 text-black  dark:text-black hover:scale-110 duration-500" />
                            </a>
                            <a href="https://leetcode.com/u/THUMMAR_MEHUL/" target="_blank" class=" text-gray-900 ">
                                <SiLeetcode class="size-8 text-black  dark:text-black hover:scale-110 duration-500" />
                            </a>
                            <a href="https://www.hackerrank.com/" target="_blank" class=" text-gray-900 ">
                                <SiHackerrank class="size-8 text-black  dark:text-black hover:scale-110 duration-500" />
                            </a>
                        </div>
                        <div className='flex justify-center space-x-3 h-5 hover:scale-110 duration-500'>
                            <h1 className='font-semibold text-sm text-[#343130]'>Email :</h1>
                            <h1 className='font-semibold text-sm text-[#343130]'>thummarmehul114@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
