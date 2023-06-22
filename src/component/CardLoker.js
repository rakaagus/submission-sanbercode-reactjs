import React, { useEffect, useState } from 'react'
import {
    MapPinIcon,
    BookmarkIcon,
    CurrencyDollarIcon,
    BriefcaseIcon,
} from '@heroicons/react/20/solid'
import {
    ClockIcon
} from '@heroicons/react/24/outline'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CardLoker = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((result) => {
            console.log(result.data.data)
            setData([...result.data.data])
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
        { data !==null && data.map((item) => (
            <div className="flex flex-col justify-between max-w-sm p-5 bg-white border border-gray-200 rounded-md shadow gap-3">
                <article className="flex flex-row gap-3">
                    <img src={item.company_image_url} alt='...' className="h-14 w-14"/>
                    <div className="flex flex-col justify-start pt-2">
                        <Link className="font-medium" to={`/detail-job/${item.id}`}>{item.title}</Link>
                        <p className="font-normal text-sm text-cyan-500">{item.company_name}</p>
                    </div>
                    <BookmarkIcon className='h-8 w-8 gap-1'/>
                </article>
                <article className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <MapPinIcon className='h-5 w-5'/>
                        <p className="font-normal text-sm">{item.company_city}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <CurrencyDollarIcon className='h-5 w-5'/>
                        <p className="font-normal text-sm">{item.salary_min} - {item.salary_max}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BriefcaseIcon className='h-5 w-5'/>
                        <p className="font-normal text-sm">1 tahun pengalaman</p>
                    </div>
                </article>
                <div className="flex flex-row mt-3 text-cyan-500 gap-2">
                    <ClockIcon className='h-5 w-5'/>
                    <p className="font-normal text-sm">{item.created_at}</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default CardLoker
