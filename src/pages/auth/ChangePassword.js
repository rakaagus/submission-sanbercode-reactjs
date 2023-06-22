import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LockClosedIcon, InboxIcon } from '@heroicons/react/20/solid'
import Cookies from 'js-cookie'
import axios from "axios";

function ChangePassword() {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        current_password: "",
        new_password : "",
        new_confirm_password: "",
    })

    const handlerChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "current_password"){
            setInput({...input, current_password: value})
        }else if(name === "new_password"){
            setInput({...input, new_password: value})
        }else if(name === "new_confirm_password"){
            setInput({...input, new_confirm_password: value})
        }
    }

    const handlerChangePass = (event) => {
        event.preventDefault()

        let {current_password, new_password, new_confirm_password} = input

        if(new_password === new_confirm_password){
            axios.post(`https://dev-example.sanbercloud.com/api/change-password`, {current_password, new_password, new_confirm_password},
                {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
            )
            .then((res) => {
                console.log(res)
                Cookies.remove('token')
                Cookies.remove('user')
                navigate('/login')
            })
            .catch((error) => {
                alert(error.message)
            })
        }else{
            alert("Comfirm Password Tidak Seusai")
        }

        
    }

    return (
        <>
            <div class="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
            <div class="pt-20 pb-6">
            <h1
                class="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap"
            >
                Hi, Welcome back!
            </h1>
            <span class="font-light text-gray-500">
                Login now to manage your job made easy.
            </span>
            <form onSubmit={handlerChangePass}>
                <div class="pt-6">
                    <label for="email" class="font-light">Current Password</label>
                    <div
                        class="
                        flex
                        overflow-hidden
                        items-center
                        mt-2
                        w-full
                        rounded-lg
                        border border-gray-400
                        transition-all
                        focus-within:shadow-lg focus-within:border-orange-500
                        "
                    >
                        <div class="flex justify-center items-center pl-6">
                        <InboxIcon />
                        </div>
                        <input 
                            class="px-4 py-4 w-full focus:outline-none font-light border-0 focus:ring-0"
                            type="password"
                            name="current_password"
                            placeholder="Enter your email address"
                            id="email"
                            onChange={handlerChange}
                            value={input.current_password}
                        />
                    </div>
                </div>
                <div class="pt-6">
                    <label for="password" class="font-light">New Password</label>
                    <div
                        class="
                        flex
                        overflow-hidden
                        items-center
                        mt-2
                        w-full
                        rounded-lg
                        border border-gray-400
                        transition-all
                        focus-within:shadow-lg focus-within:border-orange-500
                        "
                    >
                        <div class="flex justify-center items-center pl-6">
                        <LockClosedIcon />
                        </div>
                        <input
                        onChange={handlerChange}
                        value={input.new_password}
                        type="password"
                        name="new_password"
                        id="password"
                        placeholder="Enter your password"
                        class="
                            px-4
                            py-4
                            w-full
                            focus:outline-none
                            font-light
                            border-0
                            focus:ring-0
                        "
                        />
                    </div>
                </div>
                <div class="pt-6">
                    <label for="password" class="font-light">Confirm Password</label>
                    <div
                        class="
                        flex
                        overflow-hidden
                        items-center
                        mt-2
                        w-full
                        rounded-lg
                        border border-gray-400
                        transition-all
                        focus-within:shadow-lg focus-within:border-orange-500
                        "
                    >
                        <div class="flex justify-center items-center pl-6">
                        <LockClosedIcon />
                        </div>
                        <input
                        onChange={handlerChange}
                        value={input.new_confirm_password}
                        type="password"
                        name="new_confirm_password"
                        id="password"
                        placeholder="Enter your password"
                        class="
                            px-4
                            py-4
                            w-full
                            focus:outline-none
                            font-light
                            border-0
                            focus:ring-0
                        "
                        />
                    </div>
                </div>
                <div class="pt-8">
                <button
                    type="submit"
                    class="
                    py-4
                    px-8
                    w-full
                    text-white
                    bg-orange-500
                    rounded-lg
                    shadow-lg
                    hover:bg-orange-600
                    focus:ring-4 focus:ring-red-100 focus:outline-none
                    "
                >
                    Change Password
                </button>
                </div>
            </form>
            <div class="pt-4">
                <div class="font-light text-center text-gray-500">
                Not registered yet?
                <Link
                    to="/register"
                    class="font-normal text-teal-500 hover:text-teal-600"
                    >Create an Account</Link>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ChangePassword