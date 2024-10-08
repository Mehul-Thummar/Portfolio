import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";


const ProjectCard = () => {
    return (
        <div>
            <div class=" flex justify-center relative overflow-hidden sm:py-12">
                <div class="relative group">
                    <div class="max-w-7xl mx-auto">
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <div class="max-w-72 p-6">
                                <a href="" >
                                    <img class="rounded-lg mb-4 " src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg" alt="" />
                                </a>
                                <div className='flex items-end space-x-2'>
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">ToDo List</h5>
                                    <a href="https://github.com/Mehul-Thummar/Todo-Mini-Project-ExpressJS.git" target="_blank">
                                        <FaGithub class=" text-gray-500  dark:text-gray-400 mb-3 " />
                                    </a>
                                    <a href="" target="_blank">
                                        <AiOutlineGlobal class=" text-gray-500  dark:text-gray-400 mb-3 " />
                                    </a>
                                </div>
                                <p class="mb-3 font-normal leading-5 text-sm text-gray-500 dark:text-gray-400">This project create in Node.js, Express.js, JavaScript, & Ejs this deploye on cloud-based platform Render.com.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative group ml-10">
                    <div class="max-w-7xl mx-auto">
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <div class="max-w-72 p-6">
                                <a href="" >
                                    <img class="rounded-lg mb-4 h-40" src="https://www.teamly.com/blog/wp-content/uploads/2022/02/Project-Management-Blogs.png" alt="" />
                                </a>
                                <div className='flex items-end space-x-2'>
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">MyBlog List</h5>
                                    <a href="https://github.com/Mehul-Thummar/MyBlog-Mini-Project-ExpressJS.git" target="_blank">
                                        <FaGithub class=" text-gray-500  dark:text-gray-400 mb-3 " />
                                    </a>
                                    <a href="https://myblog-mini-project-expressjs.onrender.com" target="_blank">
                                        <AiOutlineGlobal class=" text-gray-500  dark:text-gray-400 mb-3 " />
                                    </a>
                                </div>
                                <p class="mb-3 font-normal leading-5 text-sm text-gray-500 dark:text-gray-400">The Node.js, Express.js, JavaScript, and EJS projects are developed and deployed on the cloud-based Render.com platform.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative group ml-10">
                    <div class="max-w-7xl mx-auto">
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <div class="max-w-72 p-6 ">
                                <a href="" >
                                    <img class="rounded-lg mb-4 h-40 " src="https://static.wixstatic.com/media/0606a0_c15bf411bbc645bdab1d23d94a38c50e~mv2.jpg/v1/fill/w_640,h_444,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/0606a0_c15bf411bbc645bdab1d23d94a38c50e~mv2.jpg" alt="" />
                                </a>
                                <div className='flex items-end space-x-2'>
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Furniture Project</h5>
                                    <a href="https://github.com/Mehul-Thummar/Furniture_Project.git" target="_blank">
                                        <FaGithub class=" text-gray-500  dark:text-gray-400 mb-3 " />
                                    </a>
                                    {/* <a href="https://furniture-project-ufgb.onrender.com" target="_blank">
                                        <AiOutlineGlobal class=" text-gray-500  dark:text-gray-400 mb-3 " />
                                    </a> */}
                                </div>
                                <p class="mb-3 font-normal leading-5 text-sm text-gray-500 dark:text-gray-400">This project was developed using JavaScript, Express.js, and Node.js and was hosted on the cloud platform Render.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ProjectCard
