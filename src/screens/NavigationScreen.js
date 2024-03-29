import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { MdPayment } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'

const NavigationScreen = () => {
    // const { state } = useLocation();
    // const { name } = state || { name: '' };

    const [name, setName] = useState(null)

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
        }
        console.log(userInfo)
    }, [userInfo, name])

    const navigate = useNavigate()


    const navigateAddStudentsScreen = () => {
        navigate('/newstudent')
    }

    const navigateModifyStudentsScreen = () => {
        navigate('/checkStudent')
        // console.log('navigating')
    }

    const navigateAdminScreen = () => {
        navigate('/adminview')
        // console.log('navigating')
    }

    return (
        <div className="w-screen h-screen px-8 pt-12 pb-20 sm:px-16 sm:py-32 flex justify-center items-center flex-col ">
            <div className="flex justify-between gap-10  w-full ">
                <div >
                    <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:font-semibold mb-2">Hello {name}👋</h1>
                    <h1 className="text-md md:text-lg">Choose what you wish to do</h1>
                </div>
                <div className="flex justify-center items-center md:hidden" onClick={() => navigate('/checkStudent?redirect=updateFee')}>
                    <button type="button" class="w-16 h-16 border border-blue-300 text-blue-600 bg-slate-300 rounded-full p-2  text-sm">
                        <div className="font-semibold">Fee</div>
                        <div className="text-xs">Update</div>
                    </button>
                </div>
                <div className="hidden md:flex justify-end items-center" onClick={() => navigate('/checkStudent?redirect=updateFee')}>
                    <button type="button" class="flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-2 py-2.5 mb-2"><MdPayment className="mt-0 mr-2 h-5 w-5 md:h-5 md:w-5 lg:w-6 lg:h-6" /> Update fee</button>
                </div>
            </div>
            <div className="grid grid-cols-4 ">



                


            </div>
            <div className="mt-8 w-full  md:grid md:grid-cols-3 gap-4 ">
                <div class="border border-blue-400 rounded-xl p-4 mb-4 md:col-span-1 md:h-64 lg:h-80 lg:flex lg:justify-center lg:items-center cursor-pointer" onClick={navigateAddStudentsScreen}>
                    <div className="grid grid-cols-3 md:block">
                        <img src="./image 5.png" className="col-span-1 object-cover md:block" />
                        <h1 className="text-lg font-semibold text-blue-400 col-span-2 mx-auto my-auto md:block md:text-center md:mt-4">Add student</h1>
                    </div>
                </div>
                <div class="border border-blue-400 rounded-xl p-4 mb-4 md:col-span-1 md:h-64 lg:h-80 lg:flex lg:justify-center lg:items-center cursor-pointer" onClick={navigateModifyStudentsScreen}>
                    <div className="grid grid-cols-3 md:block">
                        <img src="./image 6.png" className="col-span-1 object-cover md:block" />
                        <h1 className="text-lg font-semibold text-blue-400 col-span-2 mx-auto my-auto md:block md:text-center">Modify student</h1>
                    </div>
                </div>
                <div class="border border-blue-400 rounded-xl p-4 mb-4 md:col-span-1 md:h-64 lg:h-80 lg:flex lg:justify-center lg:items-center cursor-pointer" onClick={navigateAdminScreen}>
                    <div className="grid grid-cols-3 md:block">
                        <img src="./image 7.png" className="col-span-1 object-cover md:block" />
                        <h1 className="text-lg font-semibold text-blue-400 col-span-2 mx-auto my-auto md:block md:text-center">Analytics</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NavigationScreen