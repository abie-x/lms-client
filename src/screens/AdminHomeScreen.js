import React from "react";
import { MdOutlinePayment, MdAssignmentAdd, MdSms } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

const AdminHomeScreen = () => {
    return (
        <div className="h-screen w-screen px-4 py-6 md:px-12 md:py-12 grid gap-2 grid-cols-1 md:grid-cols-10">
            <div className="w-full h-full md:col-span-8 mb-6">
                <h3 className="font-semibold text-blue-500 text-lg">Hey Nishad👋</h3>
                <h4 className="font-normal text-black text-sm">Welcome to your admin cockpit</h4>
                <div className="w-full grid gap-12 md:gap-4 grid-cols-1 md:grid-cols-2 px-2 py-6 md:pt-16">
                    <div className="w-full h-40 ">
                        <h4 className="font-semibold text-sm text-blue-500 pb-2">Revenue generated</h4>
                        <div className="w-full h-full bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 grid grid-cols-1 grid-rows-5">
                            <div className="w-full bg-white row-span-2 rounded-md flex justify-between items-center pr-2">
                                <div className="w-12 h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold cursor-pointer">1D</p>
                                </div>
                                <div className="w-12 h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold cursor-pointer">1W</p>
                                </div>
                                <div className="w-12 h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold cursor-pointer">6M</p>
                                </div>
                                <div className="h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold text-blue-500 cursor-pointer">All time</p>
                                </div>
                                
                            </div>
                            <div className="w-full row-span-3 flex justify-between items-center p-2">
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">1.01L</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pl-2 pt-2">NIOS</p>
                                </div>
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">1.01L</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pt-2 text-center">BOSSE</p>
                                </div>
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">1.01L</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pt-2">DEGREE</p>
                                </div>
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">1.01L</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pt-2 text-center">AKSHAYA</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full h-40 ">
                        <h4 className="font-semibold text-sm text-blue-500 pb-2">Regestrations closed</h4>
                        <div className="w-full h-full bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 grid grid-cols-1 grid-rows-5">
                            <div className="w-full bg-white row-span-2 rounded-md flex justify-between items-center pr-2">
                                <div className="w-12 h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold cursor-pointer">1D</p>
                                </div>
                                <div className="w-12 h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold cursor-pointer">1W</p>
                                </div>
                                <div className="w-12 h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold cursor-pointer">6M</p>
                                </div>
                                <div className="h-12 flex justify-center items-center">
                                    <p className="text-sm font-semibold text-blue-500 cursor-pointer">All time</p>
                                </div>
                                
                            </div>
                            <div className="w-full row-span-3 flex justify-between items-center p-2">
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">100</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pl-2 pt-2">NIOS</p>
                                </div>
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">150</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pt-2 text-center">BOSSE</p>
                                </div>
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">25</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pt-2">DEGREE</p>
                                </div>
                                <div  className="h-fit flex-col justify-center items-center">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-full flex justify-center items-center">
                                        <p className="text-sm font-semibold text-blue-500">100</p>
                                    </div>
                                    <p className="text-xs font-medium text-blue-500 pt-2 text-center">AKSHAYA</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-500 rounded-lg md:col-span-2 grid md:hidden gap-2 grid-cols-2 px-4 py-4 text-blue-500 mb-2">
                <div className="bg-white rounded-lg h-12 flex justify-center items-center">
                    <p className="font-semibold text-sm flex"><MdOutlinePayment className="h-5 w-5 mr-2"/>pending fee</p>
                </div>
                <div className="bg-white rounded-lg h-12 flex justify-center items-center">
                    <p className="font-semibold text-sm flex justify-center"><MdAssignmentAdd className="h-5 w-5 mr-2"/>assignments</p>
                </div>
                <div className="bg-white rounded-lg h-12 flex justify-center items-center">
                    <p className="font-semibold text-sm flex"><MdSms className="h-5 w-5 mr-2"/>SMS alerts</p>
                </div>
                <div className="bg-white rounded-lg h-12 flex justify-center items-center">
                    <p className="font-semibold text-sm flex"><PiStudentFill className="h-5 w-5 mr-2"/>filter students</p>
                </div>
                <div className="bg-white col-span-2 rounded-lg h-12 flex justify-center items-center">
                    <p className="font-semibold text-sm flex"><GiTeacher className="h-5 w-5 mr-2"/>teacher ID</p>
                </div>
            </div>
            <div className=" w-full bg-blue-500 rounded-xl md:col-span-2 hidden md:grid md:gap-4 md:grid-rows-5 px-4 py-4 text-white">
                <div className="bg-blue-500 border border-white rounded-xl flex justify-center items-center cursor-pointer">
                    <p className="font-medium text-lg flex"><MdOutlinePayment className="h-7 w-7 mr-2"/>pending fee</p>
                </div>
                <div className="bg-blue-500 border border-white rounded-xl flex justify-center items-center cursor-pointer">
                    <p className="font-medium text-lg flex justify-center"><MdAssignmentAdd className="h-7 w-7 mr-2"/> assignments</p>
                </div>
                <div className="bg-blue-500 border border-white rounded-xl flex justify-center items-center cursor-pointer">
                    <p className="font-medium text-lg flex"><MdSms className="h-7 w-7 mr-2"/>SMS alerts</p>
                </div>
                <div className="bg-blue-500 border border-white rounded-xl flex justify-center items-center cursor-pointer">
                    <p className="font-medium text-lg flex"><PiStudentFill className="h-7 w-7 mr-2"/>filter students</p>
                </div>
                <div className="bg-blue-500 border border-white rounded-xl flex justify-center items-center cursor-pointer">
                    <p className="font-medium text-lg flex"><GiTeacher className="h-7 w-7 mr-2"/>teacher ID</p>
                </div>
            </div>
        </div>
    )
}

export default AdminHomeScreen