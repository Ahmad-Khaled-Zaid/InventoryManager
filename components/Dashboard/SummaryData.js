import { useEffect, useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import axios from 'axios'
import { getAuthToken } from '../../utils/functions';



let tempSummary = {
    total_inventory:
    {
        title: "Total Items",
        count: 55,
        icon: <FaBuffer className="text-3xl text-orange-400" />
    },
    total_group: {
        title: "Total Groups",
        count: 4,
        icon: <FaUserFriends className="text-3xl text-sky-500" />
    },
    total_shop: {
        title: "Total Shops",
        count: 6,
        icon: <FaStoreAlt className="text-3xl text-purple-400" />
    },
    total_users: {
        title: "Total Users",
        count: 5,
        icon: <FaUserAlt className="text-2xl text-pink-400" />
    }
}


export default function SummaryData() {

    const [summaryData, setSummaryData] = useState(tempSummary)
    const [isLoading , setIsLoading] = useState(true)
    useEffect(() => {
        getSummaryData()
    }, [])


    const getSummaryData = async () => {

        let headers = getAuthToken()
        let response = await axios.get('http://inventer-ms.herokuapp.com/app/summary', headers)
        
        if (response) {
            const result = response.data
            tempSummary.total_inventory.count= response.data.total_inventory
            tempSummary.total_group.count = response.data.total_group
            tempSummary.total_shop.count = response.data.total_shop
            tempSummary.total_users.count = response.data.total_users
            setIsLoading(false)
            setSummaryData(tempSummary)
            

        }
       
    }

    return (
        <div className="flex justify-between p-2 py-4 ml-64 bg-gradient-to-r">
            {
                summaryData && Object.values(summaryData).map((item, index) =>
                    < div key={index} className="flex justify-between w-64 p-4 my-4 mr-4 bg-white rounded-lg shadow-md hover:bg-green-400 hover:text-white">
                        <div>
                            <div className="font-sans text-sm font-bold text-gray-500"> {item.title}</div>
                            <div className="font-sans font-bold"> {isLoading? "..." : item.count}</div>
                        </div>
                        <div>
                            {item.icon}
                        </div>
                    </div>
                )
                
            }
        </div>
    )

}

