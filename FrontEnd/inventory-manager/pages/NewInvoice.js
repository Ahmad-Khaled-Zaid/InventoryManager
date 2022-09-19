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
    axios.post("http://127.0.0.1:8000/app/inventory", { name: e.target[0].value, total: e.target[1].value, group_id: x, price: e.target[3].value }, getAuthToken())
  }
  const [showModal, setShowModal] = useState(false)
  const usersData = async () => {
    const headers = getAuthToken()
    let response = await axios.get('http://localhost:8000/app/inventory', headers)
    let response2 = await axios.get('http://localhost:8000/app/group', headers)

    setData(response.data.results)
    setGroups(response2.data.results)
  }

  useEffect(() => {
    data.length <= 0 && usersData()
  }, [data, groups])


  const [query, setQuery] = useState("")
  return (
    <div >
      <button onClick={() => { setShowModal(true) }} type="submit" class=" adduser_inv bg-green-500 text-white border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green ">
        New Invoice
      </button>
      <Head>
        <title>Inventer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SideBar />
      <main>
      </main>
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
                Remaining
              </th>

              <th scope="col" class="py-3 px-6 text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele,index) => {
              
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
                      N/A
                    </td>
                    <td class="py-4 px-6">
                      {ele.name}
                    </td>
                    <td class="py-4 px-6">
                      {ele.group.name}
                    </td>
                    <td class="py-4 px-6">
                      {ele.price}$
                    </td>
                    <td class="py-4 px-6">
                      <div class="custom-number-input h-10 w-32">
                        
                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button data-action="decrement" class=" bg-green-200 text-green-500 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer outline-none mr-2" onClick={() => setCounter(counter -1)}>
                            <span class="m-auto text-2xl font-thin">−</span>
                          </button>
                          {/* <p class="counter">{counter}</p> */}
                          <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                          <button data-action="increment" class="bg-green-200 text-green-500 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer ml-2" onClick={() => setCounter(counter + 1)}>
                            <span class="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </td>

                  </tr>
                )
              }
            })}

          </tbody>
        </table>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}  >
          <div class="py-6 px-6 lg:px-8">
            <form class="space-y-6" onSubmit={submitForm}>
              <div>
                <label for="ItemName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item Name</label>
                <input name="ItemName" id="ItemName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <div>
                <label for="totalAvailable" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">total Available</label>
                <input name="totalAvailable" id="totalAvailable" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />

                <label for="group" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-5 ">Group / Category</label>
                <select name="group" id="group" class=" rounded px-20 py-2  border-2 mb-5" >
                  {
                    groups.map((ele) => {
                      return <option value={ele.name}>{ele.name}</option>
                    })
                  }
                </select>
                <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item Price</label>
                <input name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />

              </div>
              <div class="flex justify-between">
                <div class="flex items-start">
                </div>
              </div>
              <button type="submit" class="w-full text-white bg-green-500   hover:border-green-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Item</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              </div>
            </form>
          </div>

        </Modal>
      </div>


      <p> Users Page</p>
      <form class=" search_inv flex items-center ">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative ">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-48 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        </div>
      </form>

    </div >
  )
}