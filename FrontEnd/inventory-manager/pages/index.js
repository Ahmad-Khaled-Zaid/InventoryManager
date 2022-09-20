import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PieChart } from '../components/Dashboard/Chart'
import SummaryData from '../components/Dashboard/SummaryData'
import TopSell from '../components/Dashboard/TopSellingData'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push('/Login')
    }
  }, [])

  return (
    <div className=''>
      <Head>
        <title>Inventer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SideBar />

      <main className='justify-center py-2 bg-gray-100'>
        <SummaryData />
        <div className='flex ml-64 bg-gray-100   justify-between'>
          <div className='p-4 bg-white rounded-lg shadow-md '>
            <p className='font-sans text-lg font-semibold text-gray-500'>Top Selling Items</p>
            <TopSell />
          </div>
          {/* for the pi chart  */}
          <div className='w-auto p-4 ml-4 bg-white rounded-lg shadow-md'>
            <p className='font-sans text-lg font-bold text-gray-500'>Sales By Shop</p>
            <div className='flex items-center justify-between rounded-lg'>
              <PieChart/>
            </div>
            <div>
              <p> Pr </p>
            </div>
          </div>

        </div>
        {/* for more visualization  */}
        <div className=''></div>
      </main>

    </div>
  )
}
