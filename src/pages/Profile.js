import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

    const user = JSON.parse(Cookies.get("user"))
    console.log(user)

    return (
        <div>
            <section className="pt-16 bg-blueGray-50">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                        <div className="relative">
                            <img src={user.image_url} alt='....' className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-sm" />
                        </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                22
                            </span>
                            <span className="text-sm text-blueGray-400">Lamaran Yang Diterima</span>
                            </div>
                            <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                10
                            </span>
                            <span className="text-sm text-blueGray-400">Lamaran Yang Ditolak</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                            {user.name}
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                            {user.email}
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                        Solution Manager - Creative Tim Officer
                        </div>
                        <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                        University of Computer Science
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            An artist of considerable range, Jenna the name taken
                            by Melbourne-raised, Brooklyn-based Nick Murphy
                            writes, performs and records all of his own music,
                            giving it a warm, intimate feel with a solid groove
                            structure. An artist of considerable range.
                            </p>
                            <Link to="javascript:void(0);" className="font-normal text-pink-500">
                            Show more
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer className="relative  pt-8 pb-6 mt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Made with <Link to="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800">Notus JS</Link> by <Link to="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800"> Creative Tim</Link>.
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </section>
        </div>
    )
}

export default Profile