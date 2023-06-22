import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDashboard = () => {
    const user = JSON.parse(Cookies.get("user"))

    return (
        <>
            <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div class="relative flex items-center justify-end w-full p-1 space-x-4">
                    <Link to="#" class="relative block">
                        <img alt="profil" src={user.image_url} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </Link>
                    <button class="flex items-center text-gray-500 dark:text-white text-md">
                        {user.name}
                        <svg width="20" height="20" class="ml-2 text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </>   
    )
}

export default NavbarDashboard