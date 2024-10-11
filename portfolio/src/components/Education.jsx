import React from 'react'

const Education = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <div className="mx-auto px-4 sm:container">
                    <div className="border-l-[5px] border-pink-600  border-primary pl-5">
                        <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                            Education & Experience
                        </h2>
                    </div>

                    <div className=''>
                        <div class="flex items-center dark:bg-gray-800">
                            <div class="relative cursor-pointer dark:text-white mt-5">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                <div
                                    class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg ">
                                    <div class="flex items-center">
                                        <h3 class="my-2 mx-3 text-lg font-bold text-gray-800 dark:text-white">Job</h3>
                                        <p class="text-gray-600 dark:text-gray-300">
                                            (I started working as a manager at BBS Credit Co-operative Soc. Ltd. in 2018.)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center dark:bg-gray-800">
                            <div class="relative cursor-pointer dark:text-white  mt-5">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                <div
                                    class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg ">
                                    <div class="flex items-center ">
                                        <h3 class="my-2 mx-3 text-lg font-bold text-gray-800 dark:text-white">Diploma In Co-Op. Manage.</h3>
                                        <p class="text-gray-600 dark:text-gray-300">
                                            (I graduated from Gujarat State Co-Op. Union  in 2019.)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-end dark:bg-gray-800">
                            <div class="relative cursor-pointer dark:text-white mt-5">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-r  from-purple-600 to-pink-600 rounded-lg dark:bg-gray-200"></span>
                                <div class="relative p-2 bg-white dark:bg-gray-800 border-l-2 border-t-2 rounded-lg  ">
                                    <div class="flex items-center ">
                                        <h3 class="my-2 mx-3 text-lg font-bold text-gray-800 dark:text-white">HSC</h3>
                                        <p class="text-gray-600 dark:text-gray-300">
                                            (In 2017, I finish my 12th year.from Akhil Bharat Open Schooling.)
                                        </p>
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

export default Education
