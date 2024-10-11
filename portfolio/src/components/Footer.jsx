import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            <footer class="w-full py-10" >
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto space-y-3">
                        <div class="text-lg text-center flex-col space-y-4 md:flex-row md:gap-12 transition-all duration-500 py-6 mb-7 border-b border-gray-200">
                            <h1 className='text-2xl font-bold '>Contact Me</h1>
                            {/* <h1 className='text-lg font-bold '>Let's Work Together</h1> */}
                            <div className='flex justify-center space-x-3 h-5 hover:scale-110 duration-500'>
                                <h1 className='font-semibold text-sm text-[#343130]'>Email :</h1>
                                <h1 className='font-semibold text-sm text-[#343130]'>thummarmehul114@gmail.com</h1>
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
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
