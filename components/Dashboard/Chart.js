import { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { getAuthToken } from '../../utils/functions';
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);




export function PieChart() {
  const [label, setLabel] = useState([])
  const [total, setTotal] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    label.length <= 0 && getdata()
    console.log("Hi Ashrf")
  }, [])


  const getdata = async () => {
    let headers = getAuthToken()
    let response = await axios.get('https://inventer-ms.herokuapp.com/app/sales-by-shop', headers)
    console.log(response.data)
    if (response && label.length <= 0) {
      const result = await response.data.map(item => {
        return (
          setLabel(prev => [item.name, ...prev]),
          setTotal(prev => [item.amount_total, ...prev]),
          console.log(11, label, total)
        )
      })

    }
  }
  const data = {
    labels: label,
    datasets: [
      {
        label: '# of Votes',
        data: total,
        backgroundColor: [
          'rgb(255, 213, 158)',
          'rgb(159, 201, 243)',
          'rgb(164, 96, 237)',
          'rgb(180, 255, 159)',
          'rgb(249, 255, 164)',
          'rgb(255, 161, 161)'
        ],
        borderColor: [
          'rgb(255, 213, 158)',
          'rgb(159, 201, 243)',
          'rgb(164, 96, 237)',
          'rgb(180, 255, 159)',
          'rgb(249, 255, 164)',
          'rgb(255, 161, 161)'
        ],
        borderWidth: 1,
      },
    ],

  };

  return <Doughnut data={data} className="p-4 shadow-md" />;
}
