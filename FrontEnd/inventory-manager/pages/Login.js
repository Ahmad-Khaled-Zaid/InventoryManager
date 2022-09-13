import axios from 'axios'
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

//  
function Login() {
    const [back, setBack] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            router.push('/Home')
            setBack(true)
        }

    }, [back])
    let router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://127.0.0.1:8000/user/login', { email: e.target[0].value, password: e.target[1].value }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Login error',
                text: 'Email or password is not correct',
                position: 'top-right'
            })

        })
        if (response) {
            localStorage.setItem("accessToken", response.data.access)
            setBack(true)
            // router.push('/Home')
        }
    }


    return (
        <div className="flex flex-col justify-center min-h-screen py-2 bg-gray-100 item-center">
            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <div className="flex w-2/3 max-w-4xl bg-white shadow-2xl rounded-2xl">
                    <div className="w-3/5 p-5">
                        <div className="font-bold text-left">
                            <span className="text-green-600"> INVENTORY</span> MS

                        </div>
                        <div className="py-10">
                            <h2 className="mb-2 text-3xl font-bold text-green-500">Sign in to Account</h2>
                            <div className="inline-block w-10 mb-2 border-t-2 border-green-500"></div>
                            <div className="flex justify-center my-2">
                                <a href="#" className='p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                    <FaFacebook className='text-sm' />
                                </a>
                                <a href="#" className='p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                    <FaLinkedin className='text-sm' />
                                </a>
                                <a href="#" className='p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                    <FaGoogle className='text-sm' />
                                </a>
                            </div>

                            <p className='text-gray-400 my-3'>or use your email account </p>
                            <form className='flex flex-col items-center' onSubmit={onSubmit}>
                                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                    <FaRegEnvelope className='text-gray-400 m-2' />
                                    <input type="email " name='email' placeholder='Email' className='bg-gray-100 flex-1 outline-none' required ></input>
                                </div>
                                <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                    <MdLockOutline className='text-gray-400 m-2' />
                                    <input type="password" name='password' placeholder='Password' className='bg-gray-100 flex-1 outline-none' required></input>
                                </div>
                                <button type='submit' href="www.google.com" className="border-2 border-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-5">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="w-2/5 px-12 text-white bg-green-600 rounded-tr-2xl rounded-br-2xl py-36 ">
                        <h1 className="mb-2 text-3xl font-bold">Sign up Now!</h1>
                        <div className="inline-block w-10 mb-2 border-t-2 border-white"></div>
                        <p className="mb-10">Fill up personal inforamtion and start journey with us</p>

                        <a href='/SignUp' className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600">Sign Up</a>
                    </div>
                </div>
            </main >
        </div>
    )
}
export default Login
