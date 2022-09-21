import { useEffect, useState } from 'react'
import axios from 'axios'
import { getAuthToken } from '../../utils/functions'
let path = "https://us.123rf.com/450wm/_fla/_fla1206/_fla120600284/14019062-abstract-grunge-rubber-stamp-with-the-word-new-product-written-inside-the-stamp.jpg?ver=6"

const tempData = [
    {
        photo: path,
        name: "Chocolate Peanut Truffles",
        total: 5
    },
    {
        photo: path,
        name: "Almond Flaxseed Cookies",
        total: 6
    },
    {
        photo: path,
        name: "Chocolate Chunk Cookies",
        total: 10
    },
    {
        photo: path,
        name: "Strwbarry Chia Roll-Ups",
        total: 34
    },
    {
        photo: path,
        name: "Strwbarry Chia Roll-Ups",
        total: 34
    },
    {
        photo: path,
        name: "Strwbarry Chia Roll-Ups",
        total: 34
    },
    {
        photo: path,
        name: "Strwbarry Chia Roll-Ups",
        total: 34
    },
    {
        photo: path,
        name: "Strwbarry Chia Roll-Ups",
        total: 34
    },
    {
        photo: path,
        name: "Strwbarry Chia Roll-Ups",
        total: 34
    },
    
]

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
                    <div key={index} className="p-3 m-6 bg-gray-100 rounded-lg shadow-md hover:bg-green-400 hover:text-white">
                        <div className='items-center rounded-lg '>
                            <img className='items-center rounded-lg shadow-md' width={100} src={item.photo} />
                        </div>
                        <div className='font-sans text-xs font-bold text-gray-500'>{item.name}</div>
                        <div className='font-sans text-sm font-bold'>{item.total}</div>
                    </div>)
            }
        </div>
    )

}

