import axios from 'axios'
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
function Login() {
    const [back, setBack] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            router.push('/')
            setBack(true)
        }

    }, [back])
    let router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('https://inventer-ms.herokuapp.com/user/login/', { email: e.target[0].value, password: e.target[1].value })

        if (response) {
            localStorage.setItem("accessToken", response.data.access)
            setBack(true)
        }
    }
    return (
        <div className="flex flex-col justify-center min-h-screen py-2 bg-gray-100 item-center">
            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <div className="flex w-5/12 max-w-4xl bg-white shadow-2xl rounded-2xl justify-center">
                    <div className="w-3/5 p-5 ">
                        <div className="title font-bold text-left">
                            <span className="text-green-600 mr="> INVENTORY</span> MS
                            {/* <img src="https://www.groenewout.com/wp-content/uploads/2018/01/gw_warehouse.jpg" /> */}
                        </div>
                        <div className="py-16">
                            <h2 className="mb-2 text-3xl font-bold text-green-500">Sign in to Account</h2>
                            <div className="inline-block w-10 mb-2 border-t-2 border-green-500"></div>
                            <div className="flex justify-center my-2">
                            </div>
                            <div className="social  flex justify-center my-10 mt-20 ">
                                <a href="#" className=' s-app p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                    <FaFacebook className='text-sm' />
                                </a>
                                <a href="#" className='s-app p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                    <FaLinkedin className='text-sm' />
                                </a>
                                <a href="#" className='s-app p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                    <FaGoogle className='text-sm' />
                                </a>

                            </div>
                            <form className='flex flex-col items-center' onSubmit={onSubmit}>
                                <div className='flex items-center w-64 p-2 mb-3 bg-gray-100'>
                                    <FaRegEnvelope className='m-2 text-gray-400' />
                                    <input type="email " name='email' placeholder='Email' className='flex-1 bg-gray-100 outline-none' required autocomplete="off" ></input>
                                </div>
                                <div className='flex items-center w-64 p-2 bg-gray-100'>
                                    <MdLockOutline className='m-2 text-gray-400' />
                                    <input type="password" name='password' placeholder='Password' className='flex-1 bg-gray-100 outline-none' required></input>
                                </div>
                                <button type='submit' href="www.google.com" className="inline-block px-12 py-2 mt-5 font-semibold border-2 border-green-600 rounded-full hover:bg-green-500 hover:text-white">Sign in</button>
                            </form>
                        </div>
                    </div>
                    {/* <div className=" container w-2/5 px-12 text-white bg-green-600 rounded-tr-2xl rounded-br-2xl py-36 ">
                        <div className="social  flex justify-center my-10 mt-20 ">
                            <a href="#" className=' s-app p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                <FaFacebook className='text-sm' />
                            </a>
                            <a href="#" className='s-app p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                <FaLinkedin className='text-sm' />
                            </a>
                            <a href="#" className='s-app p-3 mx-1 border-2 border-gray-200 rounded-full '>
                                <FaGoogle className='text-sm' />
                            </a>

                        </div>
                        <p className=" journey"> Start Your Journey With INVENTER</p>
                        <p className="Cont"> Contact Us</p>
                        <video controls>
                            <source src='' type='video/mp4'/>
                        </video>

                        <div className="inline-block w-10 mb-10 border-t-2 border-white bar"></div>
                    </div> */}
                </div>
            </main >
        </div>
    )
}
export default Login
