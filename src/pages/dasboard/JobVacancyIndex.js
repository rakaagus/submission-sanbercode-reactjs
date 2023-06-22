import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const JobVacancyIndex = () => {

    const [data, setData] = useState(null)

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((result) => {
            setData([...result.data.data])
        }).catch((err) => {
            console.log(err)
        })

        setFetchStatus(false)
    }, [fetchStatus, setFetchStatus])

    const deleteHandler = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((result) => {
            setFetchStatus(true)
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
            </ol>
        </nav>

        <div class="flex flex-col gap-5  max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
            <Link
                to="/dashboard/list-job-vacancy/create"
                className="max-w-xs textc font-medium text-white py-2 px-2 border-2 rounded-md bg-blue-400">
                Tambah Data
            </Link>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-sm">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Perusahaan
                        </th>
                        <th scope="col" class="px-6 py-3">
                            qualifikasi
                        </th>
                        <th scope="col" class="px-6 py-3">
                            status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data !== null && data.map((result, index) => {
                    return(
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index + 1}
                        </th>
                        <td class="px-6 py-4">
                            { result.company_name }
                        </td>
                        <td class="px-6 py-4">
                            { result.job_qualification }
                        </td>
                        <td class="px-6 py-4">
                            { result.job_type } | {result.job_tenure}
                        </td>
                        <td class="px-6 py-4">
                            <Link to={`/dashboard/list-job-vacancy/form/${result.id}`} className="font-medium text-white py-2 px-2 border-2 rounded-md bg-green-500">
                                Update
                            </Link>
                            <button href="/tables" onClick={deleteHandler} value={result.id} className="font-medium text-white py-2 px-2 border-2 rounded-md bg-red-700">
                                Delete
                            </button>
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default JobVacancyIndex