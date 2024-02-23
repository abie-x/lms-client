import React, {useState} from "react";
import Select from 'react-select';
import axios from "axios";
import Lottie from "lottie-react";
import animationData from '../assets/addstudent-lotti.json'
import {useNavigate} from 'react-router-dom'

const AddStudentsScreenNew = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)
    const [errVisible, setErrVisible] = useState(true)

    const [name, setName] = useState('')
    const [place, setPlace] = useState('')
    const [course, setCourse] = useState(null)
    const [batch, setBatch] = useState(null)
    const [intake, setIntake] = useState(null)
    const [mode, setMode] = useState(null)
    const [phoneNum, setPhoneNum] = useState('')
    const [parentNum, setParentNum] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [branch, setBranch] = useState(null)
    const [admCoordinator, setAdmCoordinator] = useState('')
    const [admYear, setAdmYear] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [admissionFee, setAdmissionFee] = useState(null)

    const changeBatch = (e) => {
        setBatch(e.value)
    }

    const changeCourse = (e) => {
        setCourse(e.value)
    }

    const changeIntake = (e) => {
        setIntake(e.value)
        console.log(e.value)
    }


    const yearOptions = [
        {
            label: 2024,
            value: 2024
        },
        {
            label: 2025,
            value: 2025
        },
        {
            label: 2026,
            value: 2026
        },
        {
            label: 2027,
            value: 2027
        },
        {
            label: 2028,
            value: 2028
        }
    ]

    const courseOptions = [
        {
            value: 'SSLC',
            label: 'SSLC'
        },
        {
            value: 'Plustwo',
            label: 'Plustwo'
        }
    ]

    const batchOptions = [
        {
            value: "Science",
            label: "Science"
        },
        {
            value: "Commerce",
            label: "Commerce"
        },
        {
            value: "Humanities",
            label: "Humanities"
        }
    ]

    const intakeOptions = [
        {
            value: 'April',
            label: 'April'
        },
        {
            value: 'September',
            label: 'September'
        }
    ]

    const modeOptions = [
        {
            value: 'Online',
            label: 'Online'   
        },
        {
            value: 'Offline',
            label: 'Offline'
        },
        {
            value: 'Correspondence',
            label: 'Correspondence'
        }
    ]

    const branchOptions = [
        {
            label: 'Kumaranellur',
            value: 'Kumaranellur'
        }
    ]

    const addStudentHandler = async () => {


        setLoading(true)
        setSuccessMessage('Hold on, Processing your request')
        
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        console.log('sending requests..')

        const { data } = await axios.post(
            'https://lobster-app-yjjm5.ondigitalocean.app/api/students/nios',
            { name, place, year: admYear, course, batch, intake, mode, phoneNumber: phoneNum, parentNumber: parentNum, dob, email, branch, admissionCoordinator: admCoordinator, admissionFee },
            config
        )

        if(data.name) {
            setLoading(false)
            setSuccessMessage('Student added successfully')
            console.log(data);
          
        if(email !== confirmEmail) {
            setError(`Emails doesn't match`)
            setErrVisible(true)
            setTimeout(() => {
                setError('');
                setErrVisible(false);
              }, 1000);
        } else {
            setLoading(true)
            setSuccessMessage('Hold on, Processing your request')
            
            const config = {
                headers: {
                  'Content-Type': 'application/json',
                },
            }
    
            console.log('sending requests..')
    
            const { data } = await axios.post(
                'http://127.0.0.1:5000/api/students/nios',
                { name, place, year: admYear, course, batch, intake, mode, phoneNumber: phoneNum, parentNumber: parentNum, dob, email, branch, admissionCoordinator: admCoordinator, admissionFee },
                config
            )
    
            if(data.name) {
                setLoading(false)
                setSuccessMessage('Student added successfully')
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            }
     
            const {message} = data
            message && setError(message)
            message && setSuccessMessage(null)
    
            const timeoutId = setTimeout(() => {
                setError(null);
            }, 2000);
        }
    }


    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden px-6 md:px-20 py-8 lg:py-6 lg:grid lg:grid-cols-2 grid grid-cols-2 bg-slate-100">
            <div className="h-full w-full md:px-28 lg:px-4 xl:px-28 md:py-3 col-span-2 lg:col-span-1 overflow-y-auto">
                <h4 className="text-base md:text-xl font-semibold text-blue-400">Enter student data from below</h4>

                <div class="mb-3 mt-6 px-3">
                    <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Name</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="place" class="block text-sm font-medium text-gray-900 mb-2">Place</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="nyc" 
                    value={place}
                    onChange={(e) => setPlace(e.target.value)} required/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="feeType" class="block text-sm font-medium text-gray-900 mb-2">Year</label>
                    <Select options={yearOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem', 
                        borderWidth: '0px', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} className="border-white text-sm" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setAdmYear(e.value)} name="feeType" controlShouldRenderValue={admYear ? true : admYear === false ? true : false}/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="year" class="block text-sm font-medium text-gray-900 mb-2">Course</label>
                    <Select options={courseOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem', 
                        borderWidth: '0px', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} className="border-white text-sm" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setCourse(e.value)} name="feeType" controlShouldRenderValue={course ? true : course === false ? true : false}/>
                </div>

                {course === 'Plustwo' && (
                    <div class="mb-3 mt-3 px-3">
                    <label for="batch" class="block text-sm font-medium text-gray-900 mb-2">Batch</label>
                    <Select options={batchOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: '.5rem',
                            padding: '0.2rem', 
                            borderWidth: '0px', 
                            backgroundColor: 'RGB(255, 255, 255)',
                    }),}} className="border-white text-sm" closeMenuOnSelect={true} isSearchable={false} onChange={changeBatch} controlShouldRenderValue={batch ? true : false}/>
                </div>)}

                <div class="mb-3 mt-3 px-3">
                    <label for="year" class="block text-sm font-medium text-gray-900 mb-2">Intake</label>
                    <Select options={intakeOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem', 
                        borderWidth: '0px', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} className="border-white text-sm" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setIntake(e.value)} name="feeType" controlShouldRenderValue={intake ? true : intake === false ? true : false}/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="mode" class="block text-sm font-medium text-gray-900 mb-2">Mode</label>
                    <Select options={modeOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem', 
                        borderWidth: '0px', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} className="border-white text-sm" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setMode(e.value)} name="feeType" controlShouldRenderValue={mode ? true : mode === false ? true : false}/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="phoneNumber" class="block text-sm font-medium text-gray-900 mb-2">Phone number</label>
                    <input type="text" id="phoneNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0123456789" 
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)} required/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="parentNumber" class="block text-sm font-medium text-gray-900 mb-2">Parent number</label>
                    <input type="text" id="phoneNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="0123456789" 
                    value={parentNum}
                    onChange={(e) => setParentNum(e.target.value)} required/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="dob" class="block text-sm font-medium text-gray-900 mb-2">Date of Birth</label>
                    <input type='date' value={dob}  onChange={(e) => setDob(e.target.value)}   class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Select date" />
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input type="text" id="email" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="admin@linfield.in" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Confirm Email</label>
                    <input type="text" id="email" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="admin@linfield.in" 
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)} required/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="branch" class="block text-sm font-medium text-gray-900 mb-2">Branch</label>
                    <Select options={branchOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '.5rem',
                        padding: '0.2rem', 
                        borderWidth: '0px', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} className="border-white text-sm" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setBranch(e.value)} name="branch" controlShouldRenderValue={branch ? true : branch === false ? true : false}/>
                </div>

                <div class="mb-3 mt-3 px-3">
                    <label for="admissioncoordinator" class="block text-sm font-medium text-gray-900 mb-2">Admission Coordinator</label>
                    <input type="text" id="admissioncoordinator" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="admin" 
                    value={admCoordinator}
                    onChange={(e) => setAdmCoordinator(e.target.value)} required/>
                </div>

                
                <div class="mb-3 mt-6 px-3">
                    <label for="admFee" class="block text-sm font-medium text-gray-900 mb-2">Admission Fee</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="1000" 
                    value={admissionFee}
                    onChange={(e) => setAdmissionFee(e.target.value)} required/>
                </div>

                { error && errVisible && <div class="p-4 mb-3 mt-6 text-sm text-red-800 rounded-lg bg-red-100 w-full" role="alert">
                    <span class="font-medium"></span> {error}
                </div>}

                {successMessage && <div class="p-4 mb-3 mt-6 text-sm text-green-800 rounded-lg bg-green-100 w-full" role="alert">
                    <span class="font-medium"></span> {successMessage}
                </div>}

                <div className="mb-3 mt-6 px-3">
                        {/* <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-3xl text-sm w-32 h-8 px-4  me-2 mb-2 transition">Edit</button> */}
                        <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm w-full h-10 px-4 me-2 mb-2" onClick={addStudentHandler}>Update</button>
                </div>

            </div>
            <div className="hidden lg:block">
                <Lottie animationData={animationData} className="w-5/6 h-full" />
            </div>
        </div>
    )
}

export default AddStudentsScreenNew