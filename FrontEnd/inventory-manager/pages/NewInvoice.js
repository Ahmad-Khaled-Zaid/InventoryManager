import axios from 'axios'
import Modal from '../components/Modal'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { getAuthToken } from '../utils/functions'


export default function inventory() {
  const [data, setData] = useState([])
  const [groups, setGroups] = useState([])
  let [counter, setCounter] = useState(0);
  let itemGroups = groups.map(ele => ele.name)
  const submitForm = async (e) => {
    let x = itemGroups.indexOf(e.target[2].value) + 1
    axios.post("http://inventer-ms.herokuapp.com/app/inventory", { name: e.target[0].value, total: e.target[1].value, group_id: x, price: e.target[3].value }, getAuthToken())
  }
  const [showModal, setShowModal] = useState(false)
  const usersData = async () => {
    const headers = getAuthToken()
    let response = await axios.get('http://inventer-ms.herokuapp.com/app/inventory', headers)
    let response2 = await axios.get('http://inventer-ms.herokuapp.com/app/group', headers)

    setData(response.data.results)
    setGroups(response2.data.results)
  }

  useEffect(() => {
    data.length <= 0 && usersData()
  }, [data, groups])


  const [query, setQuery] = useState("")
  return (
    <div >
      <Head>
        <title>Inventer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <SideBar />
        <div class="overflow-x-auto relative  sm:rounded-lg UsersTable_inv ">
          <table class="text-sm text-left text-gray-500 dark:text-gray-400 mt-20 border-collapse border "  >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr class="bg-green-500">
                <th scope="col" class="p-4 ">
                  <div class="flex items-center">
                  </div>
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Iteam Code
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Photo
                </th>
                <th scope="col" class="py-3 px-6 text-white">
                  Item Name
                </th>

                <th scope="col" class="py-3 px-6 text-white">
                  Group
                </th>

                <th scope="col" class="py-3 px-6 text-white">
                  Price
                </th>

                <th scope="col" class="py-3 px-6 text-white">
                  Remaining
                </th>

                <th scope="col" class="py-3 px-6 text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => {

                if (ele.name.toLowerCase().includes(query)) {
                  return (
                    <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                        </div>
                      </td>
                      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {ele.code}
                      </th>
                      <td class="py-4 px-6">
                        <img className='items-center rounded-lg shadow-md' width={50} src={ele.photo} />
                      </td>
                      <td class="py-4 px-6">
                        {ele.name}
                      </td>
                      <td class="py-4 px-6">
                        {ele.group.name}
                      </td>
                      <td class="py-4 px-6">
                        {ele.price} $
                      </td>
                      <td class="py-4 px-6">
                        {ele.remaining}
                      </td>
                      <td class="py-4 px-6">
                        <div class="custom-number-input h-10 w-32">

                          <form onSubmit={ } class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <input type="number" placeholder="0" class="focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                            <button type='submit' class="bg-green-600 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer ml-2">
                              <span class="m-auto font-bold py-2 px-5">Add</span>
                            </button>
                          </form>
                        </div>
                      </td>


                    </tr>
                  )
                }
              })}

            </tbody>
          </table>

        </div>



        <form class=" search_inv flex items-center ">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative ">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-48 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
          </div>
        </form>
      </main>
    </div >

  )
}