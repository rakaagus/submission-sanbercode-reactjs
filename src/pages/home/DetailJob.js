import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    MapPinIcon,
    CurrencyDollarIcon,
    BriefcaseIcon,
} from '@heroicons/react/20/solid'
import {
    ClockIcon
} from '@heroicons/react/24/outline'
import CardLoker from '../../component/CardLoker'

const DetailJob = () => {

    const {id} = useParams()

    const [data, setData] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 0,
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0,
        created_at: ""
    })

    const jobStatus = (status) => {
        if(status === 1){
            return "Dibuka"
        }else if(status === 0){
            return "Ditutup"
        }
    }

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((result) => {
            const data = result.data;
            console.log(data)
            setData({
                title: data.title,
                job_description: data.job_description,
                job_qualification: data.job_qualification,
                job_type: data.job_type,
                job_tenure: data.job_tenure,
                job_status: data.job_status,
                company_name: data.company_name,
                company_image_url: data.company_image_url,
                company_city: data.company_city,
                salary_min: data.salary_min,
                salary_max: data.salary_max,
                created_at: data.created_at
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <section className="mx-20 my-10 max-w-full flex flex-row gap-2">
            <div className="flex flex-col gap-5 max-w-4xl mr-4">
                <article className="flex flex-row gap-3 border-b-2 pb-2">
                    <img src={data.company_image_url} alt='...' className="h-14 w-14"/>
                    <div className="flex flex-col justify-start gap-2 ml-5">
                        <h2 className="font-medium">{data.title}</h2>
                        <p className="font-normal text-sm text-cyan-500">{data.company_name}</p>
                        <div className="mt-2 flex flex-col gap-3">
                            <div className="flex flex-row gap-2">
                                <MapPinIcon className='h-5 w-5'/>
                                <p className="font-normal text-sm">{data.company_city}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <CurrencyDollarIcon className='h-5 w-5'/>
                                <p className="font-normal text-sm">{data.salary_min} - {data.salary_max}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <BriefcaseIcon className='h-5 w-5'/>
                                <p className="font-normal text-sm">1 tahun pengalaman</p>
                            </div>
                            <div className="flex flex-row mt-3 text-cyan-500 gap-2">
                                <ClockIcon className='h-5 w-5'/>
                                <p className="font-normal text-sm">{data.created_at}</p>
                            </div>
                            <div className="flex flex-row mt-3 text-cyan-500 gap-2">
                            <button type="button" class="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 ">Lamar Cepat</button>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 ">Tandai</button>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 ">Bagikan</button>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col gap-3 pb-2">
                    <div>
                        <h3 className="font-bold text-lg">
                            Job Deskription
                        </h3>
                        <p className="font-normal text-sm my-3">{data.job_description}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">
                            Job Requiredment
                        </h3>
                        <p className="font-normal text-sm my-3">{data.job_qualification}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">
                            Status
                        </h3>
                        <ul>
                            <li>{data.job_type}</li>
                            <li>{jobStatus(data.job_status)}</li>
                            <li>{data.job_tenure}</li>
                        </ul>
                    </div>
                </article>
            </div>
            <div className="flex flex-col gap-2 flex-grow ml-2">
                <h3 className="font-bold text-sm">
                    Lowongan Lain Untuk kamu
                </h3>
                <CardLoker />
            </div>
        </section>
    )
}

export default DetailJob