import React, {useState, useEffect} from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdPassword } from 'react-icons/md';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import NavigationScreen from "../screens/NavigationScreen";

const LoginComponent = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setAdmin] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const submit = async () => {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        console.log('sending requests..')

        navigate(`/home`, { state: { name: 'Zack' } })

        // const { data } = await axios.post(
        //     'http://127.0.0.1:5000/api/teachers/login',
        //     { phoneNumber, password },
        //     config
        // )

        // const {message, name} = data

        // if(name) {
        //     navigate(`/home`, { state: { name: name } })
        // } else if(message) {
        //     setError(message)
        // }

        // console.log('sent request..')
        // console.log('data received', data)
      
    }

    return ( 
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-10 xl:grid-cols-11 h-full overflow-y-hidden">
            <div className="w-full bg-slate-200 rounded-xl md:col-span-1 lg:col-span-4 xl:col-span-3 sm:pb-4 sm:px-2">
                <div className="flex justify-center">
                    <img src="./linfield-logo.png" className="max-[520px]:w-3/12  max-[520px]:h-3/12 max-[640px]:w-2/12  max-[640px]:h-2/12 sm:w-2/12 sm:h-2/12 md:w-3/12 md:h-3/12 rounded-md pt-3 md:pt-6"/>
                </div>
                <div className="p-4">
                    <div class="w-full p-4 md:p-8  bg-white border border-gray-200 rounded-xl shadow ">
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div className="relative rounded-md shadow-sm">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 mb-4"
                            placeholder="Enter mobile number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            />
                            <BsFillTelephoneFill className="absolute top-3 left-2" />
                        </div>
                        <div className="relative rounded-md shadow-sm">
                            <input
                            type="password"
                            name="password"
                            id="password"
                            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                            <MdPassword className="absolute top-3 left-2" />
                        </div>
                        <div class="flex items-center h-5 mt-6">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 transition required" />
                            <label for="remember" class="ml-2 mt-1 text-sm font-medium text-gray-500">Keep me signed in</label>
                        </div>
                        <button type="button" onClick={submit} class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-4 mt-4">Login</button>
                        {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                            <span class="font-medium"></span> {error}
                        </div>}
                        <h5 className="text-sm pb-4 md:pb-8">Login as Admin? <span className="text-blue-400 cursor-pointer" onClick={() => setAdmin(true)}>click here</span></h5>
                    </div>
                    
                </div>
            </div>
            <div className="max-[640px]:hidden w-full h-full rounded-lg md:col-span-1 lg:col-span-6 xl:col-span-8 md:flex md:justify-center md:align-middle">
                <div className="w-full h-full flex justify-center md:-mb-20  ">
                    <img src="login-img.png" className="rounded-md md:w-full lg:w-3/5 h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default LoginComponent