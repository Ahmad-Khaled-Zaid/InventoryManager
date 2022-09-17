import { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa"; 
import { FaStoreAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import axios from 'axios'
import {Spin} from 'antd'


let tempSummary = {
    'total_inventory':{
        title: "Total Items",
        count: 55,
        icon: <FaBuffer className="text-3xl text-orange-400"/>
    },
    "total_shop":{
        title: "Total Shops",
        count: 6,
        icon: <FaStoreAlt className="text-3xl text-purple-400"/>
    },
    "total_group":{
        title: "Total Groups",
        count: 4,
        icon: <FaUserFriends className="text-3xl text-sky-500"/>
    },
    "total_users":{
        title: "Total Users",
        count: 5,
        icon: <FaUserAlt className="text-2xl text-pink-400"/>
    }
}


export default function SummaryData() {
    
    const [summaryData, setSummaryData] = useState(tempSummary) 
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getSummaryData()
    }, [])
    
    
    const getSummaryData = async () => {
        let response = await axios.get('http://localhost:8000/user/activities-log')
        
        setLoading(false)
        if(response){
            const result = response.data
            const _tempData = {...summaryData}
            Object.keys(result).map(item => {
                _tempData[item].count = result[item]
                return null
            })
            setSummaryData(_tempData)
        }
    }
    
    return (
        <div className="flex justify-between ml-64">
            {
                Object.values(SummaryData).map((item, index) =>
                    < div className="flex justify-between w-64 p-4 my-4 mr-4 bg-white rounded-lg shadow-md">
                        <div>
                            <div className="font-sans text-sm font-bold text-gray-500"> {item.title}</div>
                            <div className="font-sans font-bold"> {loading ? <Spin/> : item.count}</div>
                        </div>
                        <div>
                            {item.icon}
                        </div>
                    </div>)
            }
        </div>
    )

}

