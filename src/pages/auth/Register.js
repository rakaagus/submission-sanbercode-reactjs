import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LockClosedIcon, InboxIcon, UserIcon } from '@heroicons/react/20/solid'
import Cookies from 'js-cookie'
import axios from "axios";

const Register = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        image_url: "https://media.istockphoto.com/id/1399565382/id/foto/pengusaha-muda-ras-campuran-yang-bahagia-berdiri-dengan-tangan-disilangkan-bekerja-sendirian.jpg?s=612x612&w=0&k=20&c=LS4ed1T52pkAxJZK9P6jYcm75Eu1x5Hnk4t2IK5DZzo=",
        email: "",
        password: ""
    })

    const handlerChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "email"){
            setInput({...input, email: value})
        }else if(name === "password"){
            setInput({...input, password: value})
        }else if(name === "name"){
            setInput({...input, name: value})
        }
    }

    const handlerRegister = (event) => {
        event.preventDefault()

        let {name, image_url, email, password} = input

        axios.post(`https://dev-example.sanbercloud.com/api/register`, {name, image_url, email, password})
        .then((res) => {
            console.log(res)
            let {token, user} = res.data
            Cookies.set('token', token,{expires: 1})
            Cookies.set('user', JSON.stringify(user), {expires : 1})
            navigate('/login')
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <>
            <div class="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
                <div class="pt-20 pb-6">
                <h1
                    class="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap"
                >
                    Hi, Do you want to join?
                </h1>
                <span class="font-light text-gray-500">
                    Register now to borrow book
                </span>
                <form onSubmit={handlerRegister}>
                    <div class="pt-6">
                    <label for="email" class="font-light">Full Name</label>
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
                        ">
                        <div class="flex justify-center items-center pl-6">
                        <UserIcon />
                        </div>
                        <input
                        onChange={handlerChange}
                        value={input.name}
                        type="text"
                        name="name"
                        placeholder="Enter Name"
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
                    <label for="email" class="font-light">Email address</label>
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
                        onChange={handlerChange}
                        value={input.email}
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
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
                    <label for="password" class="font-light">Password</label>
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
                        value={input.password}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        class="
                            px-4
                            py-4
                            w-full
                            focus:outline-none
                            font-light
                            border-0
                            focus:ring-0
                        "/>
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
                        Sign Up
                    </button>
                    </div>
                </form>
                <div class="pt-4">
                    <div class="font-light text-center text-gray-500">
                    Already Have Account?
                    <Link
                        to="/login"
                        class="font-normal text-teal-500 hover:text-teal-600">Login Here</Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Register