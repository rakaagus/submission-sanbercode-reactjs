import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardIndex = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
      axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then((result) => {
          setData([...result.data.data])
      }).catch((err) => {
          console.log(err)
      })
  }, [])


  return (
      <>
        <nav class="flex my-5" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <Link to="/dashboard" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
          </ol>
        </nav>

        <div class="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          No
                      </th>
                      <th scope="col" class="px-6 py-3">
                          qualifikasi
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Deskripsion
                      </th>
                      <th scope="col" class="px-6 py-3">
                          status
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
                  </tr>
                  )
                })}
              </tbody>
          </table>
        </div>
      </>
    )
}

export default DashboardIndex