import { useEffect, useState } from 'react'
import axios from 'axios'
import { getAuthToken } from '../../utils/functions'


export default function TopSell() {

    const [data, setTopSell] = useState([])
    useEffect(() => {
        getdata()
    }, [])


    const getdata = async () => {
        let headers = getAuthToken()
        let response = await axios.get('https://inventer-ms.herokuapp.com/app/top-selling', headers)
        if (response) {
            const result = response.data.map(item =>{
                return {
                    photo: item.photo,
                    name: item.name,
                    total: item.total
                }
            })
            setTopSell(result)
        }
    }

    return (
        <div className="flex flex-wrap ">
            {
                data.map((item, index) =>
                    <div key={index} className="p-3 m-4 text-gray-500 bg-gray-100 rounded-lg shadow-md w-36 hover:bg-green-400 hover:text-white">
                        <div className='mx-auto mb-3 rounded-lg'>
                            <img className='items-center mx-auto rounded-lg shadow-md' width={100} src={item.photo} />
                        </div>
                        <div className='font-sans text-xs font-bold text-gray-500'>{item.name}</div>
                        <div className='font-sans text-sm font-bold'>{item.total}</div>
                    </div>)
            }
        </div>
    )

}

