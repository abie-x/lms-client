import React from "react";

const CheckStudentDetailsScreen = () => {

    const editNumberHandler = () => {
        console.log('iam editing something')
    }

    const updateStudentHandler = () => {
        console.log('iam updating something')
    }

    const SearchComponent = () => {
        return ( 
            <div className="mt-12">
                <label for="search" class="block text-sm font-medium text-gray-900 mb-2">Enter mobile number of student</label>
                <div class="flex">
                    <div class="relative w-full md:w-full lg:w-1/2">
                        <input type="search" id="search-dropdown" class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Search here.." required />
                        <button type="submit" class="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const CardComponent = () => {
        return(
            <div class="max-w-sm p-6 bg-slate-100 rounded-lg shadow mt-12">
                <div className="grid grid-cols-1 border border-gray-800 px-6 py-6 rounded-md">
                    <div className="flex justify-start text-sm mb-3">
                        <h4>Name: </h4>
                        <h4 className="ml-4">Sreekumar</h4>
                    </div>
                    <div className="flex justify-start text-sm mb-3">
                        <h4>Batch: </h4>
                        <h4 className="ml-4">October</h4>
                    </div>
                    <div className="flex justify-start text-sm mb-3">
                        <h4>Year: </h4>
                        <h4 className="ml-4">2023 second</h4>
                    </div>
                    <h4 className="mt-12 text-xs text-gray-400">If you are seeing details of another student, click edit number</h4>
                    <div className="flex justify-center mt-8">
                        <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-3xl text-sm w-32 h-8 px-4  me-2 mb-2 transition">Edit</button>
                        <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-3xl text-sm w-32 h-8 px-4 me-2 mb-2">Update</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen w-screen px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2">
            <div className="200 pl-4">
                <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-blue-500 mb-2">Enter Student Phone number</h2>
                <h4 className="text-sm md:text-md lg:text-lg font-semibold text-gray-400">& check if details are correct</h4>
                <SearchComponent />
                <CardComponent />
            </div>
            <div className=" max-[640px]:hidden mt-24 lg:-mt-7 md:w-full lg:w-4/5">
                <img src="./phone_img.png" />
            </div>
        </div>
    )
}

export default CheckStudentDetailsScreen


//<div className="bg-red-200 grid grid-cols-1 md:grid-cols-2">
{/* <div>
<h3 className="text-lg md:text-xl lg:text-3xl text-blue-500 font-semibold mb-2 md:mb-2">Enter mobile number of the student</h3>
<div className="grid grid-cols-1 md:grid-cols-2">
    <div className="flex flex-col">
        <h3 className="text-sm md:text-md lg:text-xl text-gray-400 font-semibold mb-6 md:mb-6">& check if details are correct</h3>
        <SearchComponent />
        <CardComponent />
    </div>
</div>
</div>
<div className="max-[640px]:hidden">
{/* <img src="./phone_img.png" /> */}
// </div>
// </div> */}