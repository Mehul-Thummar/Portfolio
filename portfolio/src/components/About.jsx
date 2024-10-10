import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiNodejs } from 'react-icons/di';
import { FaBootstrap, FaCss3, FaCss3Alt, FaHtml5, FaNodeJs, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript, SiJquery, SiMongodb, SiMysql, SiTypescript } from 'react-icons/si';

const About = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <div className="mx-auto px-4 sm:container">
                    <div className="border-l-[5px] border-pink-600  border-primary pl-5">
                        <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                            Education
                        </h2>
                    </div>

                    <div className=''>

                        <div class="flex justify-center items-center dark:bg-gray-800">
                            <div class="relative cursor-pointer dark:text-white">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                <div
                                    class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg ">
                                    <div class="flex items-center">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">Diploma In Co-Op. Manage.</h3>
                                    </div>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        I graduated from Gujarat State <br /> Co-Op. Union  in 2019.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center items-center dark:bg-gray-800">
                            <div class="relative cursor-pointer dark:text-white hover:ml-32 hover:mt-5 duration-500 ">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                    <div class="flex items-center">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">HSC</h3>
                                    </div>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        In 2017, I finish my 12th year. <br /> from Akhil Bharat Open Schooling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-l-[5px] border-pink-600  border-primary pl-5">
                        <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                            Technical Skill
                        </h2>
                    </div>
                    <div class=" w-full px-4 pt-16 pb-16" id="faq">
                        <div class="mx-auto w-full max-w-4xl  justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">

                            {/* html */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>HTML</h1>
                                            <div className='flex justify-center'>
                                                <FaHtml5 class="size-16 text-[#e44d26] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* css */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>CSS</h1>
                                            <div className='flex justify-center'>
                                                <FaCss3Alt class="size-16 text-[#264de4] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bootstrap */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>BOOSTRAP</h1>
                                            <div className='flex justify-center'>
                                                <FaBootstrap class="size-16 text-[#7d0af8] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sass */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>SASS</h1>
                                            <div className='flex justify-center'>
                                                <FaSass class="size-16 text-[#cd6799] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Tailwind CSS */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>TAILWIND</h1>
                                            <div className='flex justify-center'>
                                                <RiTailwindCssFill class="size-16 text-[#38bdf8] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Javascrip */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>JAVASCRIPT</h1>
                                            <div className='flex justify-center'>
                                                <SiJavascript class="size-16 text-[#f7e018] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* React Js */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>REACT JS</h1>
                                            <div className='flex justify-center'>
                                                <RiReactjsFill class="size-16 text-[#087ea4] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Next.JS */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>NEXT.JS</h1>
                                            <div className='flex justify-center'>
                                                <RiNextjsFill class="size-16 text-black " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* jQuery */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>jQUERY</h1>
                                            <div className='flex justify-center'>
                                                <SiJquery class="size-16 text-[#0773b4] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* My SQL */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>MY SQL</h1>
                                            <div className='flex justify-center'>
                                                <SiMysql class="size-16 text-[#e48e00] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mongo DB */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>MONGO DB</h1>
                                            <div className='flex justify-center'>
                                                <SiMongodb class="size-16 text-[#4faa41] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Node Js */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>NODE JS</h1>
                                            <div className='flex justify-center'>
                                                <FaNodeJs class="size-16 text-[#80bd00] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TypeScript */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>TYPESCRIPT</h1>
                                            <div className='flex justify-center'>
                                                <SiTypescript class="size-16 text-[#037acc] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Express Js */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>EXPRESS JS</h1>
                                            <img class="size-16 text-black " src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default About
