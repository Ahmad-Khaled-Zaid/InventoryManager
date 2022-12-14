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
  let itemGroups = groups.map(ele => ele.name)
  const submitForm = async (e) => {
    let x = itemGroups.indexOf(e.target[2].value) + 1
    axios.post("https://inventer-ms.herokuapp.com/app/inventory", { name: e.target[0].value, total: e.target[1].value, group_id: x, price: e.target[3].value, photo: e.target[4].value }, getAuthToken())
  }
  const [showModal, setShowModal] = useState(false)
  const usersData = async () => {
    const headers = getAuthToken()
    let response = await axios.get('https://inventer-ms.herokuapp.com/app/inventory', headers)
    let response2 = await axios.get('https://inventer-ms.herokuapp.com/app/group', headers)

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
        Add Item
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
        <table class="w-11/12 text-sm text-left text-gray-500 dark:text-gray-400 mt-20  border mr-4"  >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr class="bg-green-500">
              <th scope="col" class="p-4 rounded-l-lg">
                <div class="flex items-center">
                </div>
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Iteam Code
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Photo
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Item Name
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Item Group
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Price
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Total
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Remaining
              </th>
              <th scope="col" class="py-3 px-4 text-white">
                Added On
              </th>
              <th scope="col" class="py-3 px-4 text-white rounded-r-lg">
                Added By
              </th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              console.log(ele)
              if (ele.name.toLowerCase().includes(query)) {
                return (
                  <tr key={ele.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4 w-4 ">
                      <div class="flex items-center">
                      </div>
                    </td>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {ele.code}
                    </th>
                    <td class="py-3 px-4">
                      <img className='items-center rounded-lg shadow-md' width={100} src={ele.photo} />
                    </td>
                    <td class="py-3 px-4">
                      {ele.name}
                    </td>
                    <td class="py-3 px-4">
                      {ele.group.name}
                    </td>
                    <td class="py-3 px-4">
                      {ele.price}$
                    </td>
                    <td class="py-3 px-4">
                      {ele.total}
                    </td>
                    <td class="py-3 px-4">
                      {ele.remaining}
                    </td>
                    <td class="py-3 px-4">
                      {ele.created_at}
                    </td>
                    {ele.created_by ? <td>{ele.created_by['fullname']}</td> : <td>NA</td>}

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
                <input name="totalAvailable" id="totalAvailable" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />

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

                <label for="photo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo</label>
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