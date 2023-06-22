import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const AddJobVacancy = () => {

    const navigate = useNavigate()

    const tipePekerjaan = [
        {name: "Onsite"},
        {name: "WFH"},
        {name: "Hybrid"}
    ]

    const kontrakKerja = [
        {name: "Intership"},
        {name: "Kontrak"},
        {name: "Freelance"}
    ]

    const statusPekerjaan = [
        {name: "Dibuka", value: 1},
        {name: "Ditutup", value: 0}
    ]

    const [input, setInput] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 0,
        company_name: "",
        company_image_url: "https://media.istockphoto.com/id/1346058768/id/foto/seattle-tech.jpg?s=612x612&w=0&k=20&c=bKpJ0qvgV7wPfwrJtcZ4MvprMX7lxH2n8DHdS8715A4=",
        company_city: "",
        salary_min: 0,
        salary_max: 0
    })

    const inputHandler = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "title"){
            setInput({...input, title: value})
        }else if(name === "job_description"){
            setInput({...input, job_description: value})
        }else if(name === "job_qualification"){
            setInput({...input, job_qualification: value})
        }else if(name === "company_name"){
            setInput({...input, company_name: value})
        }else if(name === "company_city"){
            setInput({...input, company_city: value})
        }else if(name === "salary_min"){
            setInput({...input, salary_min: value})
        }else if(name === "salary_max"){
            setInput({...input, salary_max: value})
        }else if(name === "job_type"){
            setInput({...input, job_type: value})
        }else if(name === "job_tenure"){
            setInput({...input, job_tenure: value})
        }else if(name === "job_status"){
            setInput({...input, job_status: value})
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = input

        axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', 
            {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            }, 
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
        )
        .then((result) => {
            // console.log(result)
            navigate('/dashboard/list-job-vacancy')
        }).catch((err) => {
            console.log(err)
        })
    } 

    return (
        <>
            <nav class="flex my-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <Link to="/dashboard/list-job-vacancy" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg width="20" height="20" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                            </path>
                        </svg>
                        Job Vacancy
                        </Link>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <Link to="" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Form</Link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <Link to="/dashboard/list-job-vacancy/form" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Add</Link>
                        </div>
                    </li>
                </ol>
            </nav>

            <div class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                <form onSubmit={submitHandler}>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul Pekerjaan</label>
                        <input type="text" id="title" onChange={inputHandler} name="title" value={input.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="job_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Pekerjaan</label>
                        <textarea id="job_description" onChange={inputHandler} name="job_description" value={input.job_description} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="job_qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualifikasi Pekerjaan</label>
                        <textarea id="job_qualification" onChange={inputHandler} name="job_qualification" value={input.job_qualification} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Perusahaan</label>
                        <input type="text" id="company_name" onChange={inputHandler} name="company_name" value={input.company_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="company_city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lokasi Perusahaan</label>
                        <input type="text" id="company_city" onChange={inputHandler} name="company_city" value={input.company_city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <label for="salary_min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gaji Minimum</label>
                            <input type="number" id="title" onChange={inputHandler} name="salary_min" value={input.salary_min} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label for="salary_max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gaji Maximum</label>
                            <input type="number" id="salary_max" onChange={inputHandler} name="salary_max" value={input.salary_max} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="job_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipe Pekerjaan</label>
                            <select id="job_type" onChange={inputHandler} name="job_type" value={input.job_type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Pilih Tipe Pekerjaan</option>
                                {tipePekerjaan.map((item) => {
                                    return (
                                        <option value={item.name}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="job_tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kontrak</label>
                            <select id="job_tenure" onChange={inputHandler} name="job_tenure" value={input.job_tenure} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Pilih Jenis Kontrak</option>
                                {kontrakKerja.map((item) => {
                                    return(
                                        <option value={item.name}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="job_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status Pekerjaan</label>
                            <select id="job_status" onChange={inputHandler} name="job_status" value={input.job_status} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Pilih Status Pekerjaan</option>
                                {statusPekerjaan.map((item) => {
                                    return(
                                        <option value={item.value}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddJobVacancy