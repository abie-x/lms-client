import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'




export const CheckStudentDetailsScreenNew = () => {

     // const [phoneNumber, setPhoneNumber]  = useState('')
     const [name, setName] = useState(null)
     const [course, setCourse] = useState(null)
     const [batch, setBatch] = useState(null)
     const [year, setYear] = useState(null)
     const [studentId, setStudentId] = useState(null)
     const [error, setError] = useState(null)
     const [subjects, setSubjects] = useState(null)
     const [result, setResult] = useState(false)
 
     const [searchParams, setSearchParams] = useSearchParams()
     const redirect = searchParams.get('redirect')
 
 
     const editNumberHandler = () => {
         console.log('say hi')
     }
 
     const updateStudentHandler = () => {
         console.log(name)
         console.log(course)
         console.log(batch)
         console.log(year)
         console.log(redirect && redirect)
     }

    const SearchComponent = () => {

        const [phoneNumber, setPhoneNumber] = useState('')

        const changeSearchQuery = (e) => {
            setPhoneNumber(e.target.value)
        }

        const editNumberHandler = () => {
            setPhoneNumber('')
        }

        const updateStudentHandler = async () => {

            const config = {
                headers: {
                  'Content-Type': 'application/json',
                },
            }

            const { data, message } = await axios.get(
                `https://lobster-app-yjjm5.ondigitalocean.app/api/students/details?phoneNumber=${phoneNumber}`,
                config
            )

            if(data) {
                setName(data.name)
                setCourse(data.course)
                setBatch(data.batch)
                setYear(data.year)
                setStudentId(data._id)
                setSubjects(data.subjects)
                setResult(true)
            }

            console.log(data);
            
        }

        return ( 
            <div className=" lg:w-1/2 lg:mx-62 xl:mx-72 md:mx-48 bg-red-100  " >
                <div class="flex justify-center items-center mx-20 ">
                    <div class="relative w-full   ">
                        <input type="text" name="phoneNumber" id="phoneNumber" className="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter the phone no of the student" onChange={(e) => changeSearchQuery(e)} required />
                        <button class="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={() => updateStudentHandler()}>
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

        const navigate = useNavigate()

        const updateHandler = () => {
            if(redirect === 'updateFee') {
                navigate('/updateFee', { state: { id:  studentId} })
            }
            else if(!name) {
                setError(`Student doesn't exist in this phone number`)
            } else {
                if(subjects.length > 0) {
                    navigate(`/modifyStudent`, { state: { id:  studentId} })
                } else {
                    navigate(`/modifystudent`, { state: { id:  studentId} })
                }
            }
            
            // navigate('/updateStudent')
        }

        return(
            <div class="max-w-lg p-6 h-auto   bg-slate-100 rounded-lg shadow mt-12">
                <div className="grid grid-cols-1 border border-gray-800 px-6 py-6 rounded-md  justify-center">
                    <div className="flex justify-center text-sm mb-3">
                        <h4>Name: </h4>
                        <h4 className="ml-4">{name}</h4>
                    </div>
                    <div className="flex justify-center text-sm mb-3">
                        <h4>Course: </h4>
                        <h4 className="ml-4">{course}</h4>
                    </div>
                    <div className="flex justify-center text-sm mb-3">
                        <h4>Batch: </h4>
                        <h4 className="ml-4">{batch}</h4>
                    </div>
                    <div className="flex justify-center text-sm mb-3">
                        <h4>Year: </h4>
                        <h4 className="ml-4">{year}</h4>
                    </div>
                    <h4 className="mt-12 text-xs text-gray-400">If you are seeing details of another student, edit the phone number</h4>
                    <div className="flex justify-center mt-4">
                        {/* <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-3xl text-sm w-32 h-8 px-4  me-2 mb-2 transition">Edit</button> */}
                        <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm w-full h-8 px-4 me-2 mb-2" onClick={updateHandler}>Update</button>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='h-screen bg-red-100 flex flex-col items-center'>

        <div className='mt-28 flex flex-col items-center'>
            <h1 className='text-2xl md:text-xl lg:text-3xl font-semibold text-blue-500 mb-2 text-center '>Student Details</h1>
            <SearchComponent />
            {error && <div class="p-4 text-sm text-red-800 rounded-lg bg-red-100 mt-4" role="alert">
                            <span class="font-medium"></span> {error}
                </div>}

            { !result ?
                <div className=" max-[640px]:hidden mt-24 lg:-mt-0 md:w-full lg:w-5/6 justify-center">
                <img src="./phone_img.png" />
            </div>
            :
            <div className='lg:grid lg:grid-cols-2  md:mt-38 lg:space-x-24  bg-blue-100'>
                <CardComponent  />
                <div className=" max-[640px]:hidden mt-24 lg:-mt-0 md:w-full lg:w-1/2 flex bg-green-100 p-5">
                <img src="./phone_img.png" />
            </div>
            </div>
            }

        </div>
        
    </div>
  )
}
