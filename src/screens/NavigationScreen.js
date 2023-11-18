import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import { MdPayment } from "react-icons/md";

const NavigationScreen = () => {
    const { state } = useLocation();
    const { name } = state || { name: '' };

    const navigate = useNavigate()


    const navigateAddStudentsScreen = () => {
        navigate('/addStudents')
    }

    const navigateModifyStudentsScreen = () => {
        navigate('/modifyStudents')
    }

    return (
        <div className="w-screen h-screen px-8 pt-12 pb-20 sm:px-16 sm:py-32">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:font-semibold mb-4">Hello {name}👋</h1>
                    <h1 className="text-md md:text-lg">Choose what you wish to do</h1>
                </div>
                {/* <button type="button" class="w-20 h-20 border border-blue-300 text-blue-600 bg-slate-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full  text-sm ">
                    <div className="font-semibold">Fee</div>
                    <div className="text-xs">Update</div>
                </button> */}
                <div className="flex justify-center items-center md:hidden">
                    <button type="button" class="w-16 h-16 border border-blue-300 text-blue-600 bg-slate-300 hover:bg-blue-800 focus:ring-blue-300 rounded-full p-2  text-sm">
                        <div className="font-semibold">Fee</div>
                        <div className="text-xs">Update</div>
                    </button>
                </div>
                <div className="hidden md:flex justify-end items-center">
                    <button type="button" class="flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 mb-2"><MdPayment className="mt-0 mr-2 h-5 w-5 md:h-5 md:w-5" /> Update fee</button>
                </div>


            </div>
            <div className="mt-8 w-full  md:grid md:grid-cols-3 gap-4 ">
                <div class="border border-blue-400 rounded-xl p-4 mb-4 md:col-span-1 md:h-64 lg:h-80 lg:flex lg:justify-center lg:items-center cursor-pointer" onClick={navigateAddStudentsScreen}>
                    <div className="grid grid-cols-3 md:block">
                        <img src="./image 5.png" className="col-span-1 object-cover md:block"/>
                        <h1 className="text-lg font-semibold text-blue-400 col-span-2 mx-auto my-auto md:block md:text-center md:mt-4">Add student</h1>
                    </div>
                </div>
                <div class="border border-blue-400 rounded-xl p-4 mb-4 md:col-span-1 md:h-64 lg:h-80 lg:flex lg:justify-center lg:items-center cursor-pointer" onClick={navigateModifyStudentsScreen}>
                    <div className="grid grid-cols-3 md:block">
                        <img src="./image 6.png" className="col-span-1 object-cover md:block"/>
                        <h1 className="text-lg font-semibold text-blue-400 col-span-2 mx-auto my-auto md:block md:text-center">Modify student</h1>
                    </div>
                </div>
                <div class="border border-blue-400 rounded-xl p-4 mb-4 md:col-span-1 md:h-64 lg:h-80 lg:flex lg:justify-center lg:items-center cursor-pointer">
                    <div className="grid grid-cols-3 md:block">
                        <img src="./image 7.png" className="col-span-1 object-cover md:block"/>
                        <h1 className="text-lg font-semibold text-blue-400 col-span-2 mx-auto my-auto md:block md:text-center">Analytics</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NavigationScreen