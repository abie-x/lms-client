import React from "react";
import LoginComponent from "../components/LoginComponent";

const LoginScreen = () => {
    return (
        <div className="h-screen w-screen min-[320px]:px-8 md:px-12 py-12 bg-slate-100">
            <h3 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4 min-[320px]:mb-2 md:pl-8">Hey there👋</h3>
            <h3 className="text-2xl sm:text-3xl text-blue-600 font-semibold md:pl-8 mb-4 sm:2 ">Welcome to <span className="font-bold text-2xl sm:text-3xl">Linfield Eduverse</span></h3>
            <div className=" -mt-0 md:-mt-3 lg:-mt-0 xl:mt-10 lg:pl-8 ">
                <LoginComponent />
            </div>
        </div>
    )
}

export default LoginScreen