import React from 'react'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiAdobeaudition, SiAdobephotoshop, SiAdobepremierepro, SiJavascript, SiJquery, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftword, SiMongodb, SiMysql, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skill = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <div className="mx-auto px-4 sm:container">
                    <div className="border-l-[5px] border-pink-600 mt-20 border-primary pl-5">
                        <h2 className=" text-2xl font-semibold text-dark dark:text-white">
                            Technical Skill's
                        </h2>
                    </div>
                    <div class=" w-full px-4 pt-12 pb-16" id="faq">
                        <div class="mx-auto w-full max-w-4xl  justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">

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

                    <div className="border-l-[5px] border-pink-600  border-primary pl-5">
                        <h2 className=" text-2xl font-semibold text-dark dark:text-white">
                            Soft Skill's
                        </h2>
                    </div>
                    <div class=" w-full px-4 pt-12 pb-16" id="faq">
                        <div class="mx-auto w-full max-w-4xl  justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-3">

                            {/* Photoshop */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Adobe <br />Photoshop</h1>
                                            <div className='flex justify-center'>
                                                <SiAdobephotoshop class="size-16 text-[#001833] bg-[#2babfb] rounded-3xl " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Premiere */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Adobe <br /> Premiere</h1>
                                            <div className='flex justify-center'>
                                                <SiAdobepremierepro class="size-16 text-[#00005b] bg-[#9b9bfb] rounded-3xl " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Audition */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Adobe <br /> Audition</h1>
                                            <div className='flex justify-center'>
                                                <SiAdobeaudition class="size-16 text-[#00005b] bg-[#9b9bfb] rounded-3xl " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vs Code */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>VS <br /> Code</h1>
                                            <div className='flex justify-center'>
                                                <VscVscode class="size-16 text-[#00a9f6] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Word */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Microsoft <br /> Word</h1>
                                            <div className='flex justify-center'>
                                                <SiMicrosoftword class="size-16 text-[#1e61c0] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Excel */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Microsoft <br /> Excel</h1>
                                            <div className='flex justify-center'>
                                                <SiMicrosoftexcel class="size-16 text-[#10793f] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PowerPoint */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Microsoft <br /> PowerPoint</h1>
                                            <div className='flex justify-center'>
                                                <SiMicrosoftpowerpoint class="size-16 text-[#b62f14] " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Drive */}
                            <div class="flex justify-center items-center dark:bg-gray-800">
                                <div class="relative cursor-pointer dark:text-white ">
                                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                    <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                        <div className='' >
                                            <h1 className='font-bold text-xs text-center'>Google <br /> Drive</h1>
                                            <div className='flex justify-center'>
                                                <img class="h-14 w-16 mt-2 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/800px-Google_Drive_icon_%282020%29.svg.png" alt="" />
                                            </div>
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

export default Skill

