import React from "react";

const Hero = () => {
    return(
        <div className="h-60 bg-gradient-to-r from-purple-500 to-pink-500">
             <form className="flex flex-col items-start justify-between container mx-auto py-16 lg:px-16 gap-3">
                <h2 className="font-medium text-white">Dapatkan pekerjaan yang berarti bagimu</h2>
                <div className="flex lg:flex-row container mx-auto gap-2">
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[.3rem] focus:ring-blue-500 focus:border-blue-500 block p-2.5 font-sans font-normal" placeholder="Cari Lowongan" required />
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[.3rem] focus:ring-blue-500 focus:border-blue-500 block p-2.5 font-sans font-normal" placeholder="Lokasi" required />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[.3rem] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
                <div className="flex lg:flex-row container mx-auto gap-2">
                    <button type="button" class="inline-flex items-center px-7 py-1 text-sm font-medium text-center text-black hover:text-white rounded-full border hover:border-none hover:bg-blue-800 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Messages
                    </button>
                    <button type="button" class="inline-flex items-center px-7 py-1 text-sm font-medium text-center text-black hover:text-white rounded-full border hover:border-none hover:bg-blue-800 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Messages
                    </button>
                    <button type="button" class="inline-flex items-center px-7 py-1 text-sm font-medium text-center text-black hover:text-white rounded-full border hover:border-none hover:bg-blue-800 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Messages
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Hero