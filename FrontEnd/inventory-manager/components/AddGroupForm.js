import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { getAuthToken } from '../utils/functions'


const { Option } = Select

export default function GroupForm() {
    const usersData = async () => {
        const headers = getAuthToken()
        let response = await axios.get('http://localhost:8000/group', headers)
        setData(response.data.results)
      }
      const [data, setData] = useState([])
      useEffect(() => {
        data.length <= 0 && usersData()
      }, [data])
      let arr = [1, 2, 3, 4]
    
      const addg = () => {
        console.log("from user page")
      }
    const AddGroupForm = ({
        isVisible = false,
        onSuccessCallBack,
        onClose,
        groups
    }) => {

        const [form] = Form.useForm();

        const [loading, setLoading] = useState(false)

        const onSubmit = async (values) => {
            setLoading(true)

            const response = await axiosRequest({
                method: "post",
                url: GroupUrl,
                hasAuth: true,
                payload: values
            })
            setLoading(false)

            if (response) {
                notification.success({
                    message: "Operation Success",
                    description: "Group created successfully"
                })
                onSuccessCallBack()
                form.resetFields()
            }
        }

        return (
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}  >
                <div class="py-6 px-6 lg:px-8">
                    <form class="space-y-6" onSubmit={submitForm}>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Belongs To</label>
                            <input type="Name" name="Name" id="Name" placeholder="eg. Ahmad Alnabale" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />

                            <label for="Role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-5 ">Role</label>
                            <select name="Role" id="Role" class=" rounded px-20 py-2  border-2">
                                <option value="Admin">Admin</option>
                                <option value="sale">Sale</option>
                                <option value="creator">creator</option>
                            </select>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex items-start">
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-green-500   hover:border-green-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add User</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        </div>
                    </form>
                </div>

            </Modal>

        )
    }
}
