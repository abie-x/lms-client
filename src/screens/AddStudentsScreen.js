import React, {useState} from "react";
import { batch } from "react-redux";
import Select from 'react-select';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const AddStudentsScreen = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

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

    const [error, setError] = useState(null)

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

    const changeIntake = (e) => {
        setIntake(e.value)
        console.log(e.value)
    }

    const changeCourse = (e) => {
        setCourse(e.value)
    }

    const changeBatch = (e) => {
        setBatch(e.value)
    }

    const addStudentHandler = async () => {

        if(email !== confirmEmail) {
            console.log('Both emails are not equal')
        }

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
            { name, place, year: admYear, course, batch, intake, mode, phoneNumber: phoneNum, parentNumber: parentNum, dob, email, branch, admissionCoordinator: admCoordinator, },
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

        // console.log(data)
        // console.log(name)
        // console.log(place)
        // console.log(admYear)
        // console.log(course)
        // console.log(batch)
        // console.log(intake)
        // console.log(mode)
        // console.log(phoneNum)
        // console.log(parentNum)
        // console.log(dob)
        // console.log(email)
        // console.log(branch)
        // console.log(admCoordinator)
    }

    const deleteRecordsHandler = () => {
        setName('')
        setPlace('')
        setCourse(null)
        setIntake(null)
        setMode(null)
        setPhoneNum('')
        setParentNum('')
        setDob('')
        setEmail('')
        setBranch(null)
        setAdmCoordinator('')
    }

    return (
        <div className="px-6 py-12 md:py-6 h-fit md:h-screen w-screen bg-slate-100"> 
            <h3 className="text-xl lg:text-2xl text-blue-500 font-semibold mt-2 md:mt-8 ">Add student data from below</h3>

            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-4 h-fit p-4">
                <div class="mb-3">
                    <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Name</label>
                    <input type="text" id="name" value={name} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="place" class="block text-sm font-medium text-gray-900 mb-2">Place</label>
                    <input type="text" id="place" value={place} class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="Edappal" required onChange={(e) => setPlace(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="year" class="block text-sm font-medium text-gray-900 mb-2">Year</label>
                    <Select options={yearOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '12px',
                            padding: '0.05rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(156 163 175)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                            fontSize: "14px"
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setAdmYear(e.value)} controlShouldRenderValue={admYear ? true : false}/>
                </div>
                <div class="mb-3">
                    <label for="course" class="block text-sm font-medium text-gray-900 mb-2">Course</label>
                    <Select options={courseOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '12px',
                            padding: '0.05rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(156 163 175)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                            fontSize: "14px"
                    }),}} closeMenuOnSelect={true} isSearchable={false} onChange={changeCourse} controlShouldRenderValue={course ? true : false}/>
                </div>
                {console.log(loading)}
                {course === 'Plustwo' && (
                    <div class="mb-3">
                    <label for="batch" class="block text-sm font-medium text-gray-900 mb-2">Batch</label>
                    <Select options={batchOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '12px',
                            padding: '0.05rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(156 163 175)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                            fontSize: "14px"
                    }),}} closeMenuOnSelect={true} isSearchable={false} onChange={changeBatch} controlShouldRenderValue={batch ? true : false}/>
                </div>)}
                <div class="mb-3">
                    <label for="intake" class="block text-sm font-medium text-gray-900 mb-2">Intake</label>
                    <Select options={intakeOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '12px',
                            padding: '0.05rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(156 163 175)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                            fontSize: "14px"
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={changeIntake} controlShouldRenderValue={intake ? true : false}/>
                </div>
                <div class="mb-3">
                    <label for="mode" class="block text-sm font-medium text-gray-900 mb-2">Mode</label>
                    <Select options={modeOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '12px',
                            padding: '0.05rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(156 163 175)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                            fontSize: "14px"
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setMode(e.value)} controlShouldRenderValue={mode ? true : false} />
                </div>
                <div class="mb-3">
                    <label for="phoneNum" class="block text-sm font-medium text-gray-900 mb-2">Phone number</label>
                    <input type="text" id="phoneNum" value={phoneNum} class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="0123456789" required onChange={(e) => setPhoneNum(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="parentNum" class="block text-sm font-medium text-gray-900 mb-2">Parent number</label>
                    <input type="number" id="parentNum" value={parentNum} class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="0123456789" required onChange={(e) => setParentNum(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="dob" class="block text-sm font-medium text-gray-900 mb-2">Date of Birth</label>
                    <input type='date' value={dob}  onChange={(e) => setDob(e.target.value)}   class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="Select date" />
                </div>
                <div class="mb-3">
                    <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input type="text" value={email} id="email" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="admin@linfield.com" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Confirm Email</label>
                    <input type="text" value={confirmEmail} id="email" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="admin@linfield.com" required onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="branch" class="block text-sm font-medium text-gray-900 mb-2">Branch</label>
                    <Select options={branchOptions} styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '12px',
                            padding: '0.05rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(156 163 175)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                            fontSize: "14px"
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setBranch(e.value)} controlShouldRenderValue={branch ? true : false}/>
                </div>
                <div className="mb-3">
                    <label for="admCoordinator" class="block text-sm font-medium text-gray-900 mb-2">Admission Coordinator</label>
                    <input type="text" value={admCoordinator} id="admCoordinator" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="Nishad" required onChange={(e) => setAdmCoordinator(e.target.value)} />
                </div> 

                {/* <div className="w-screen overflow-x-hidden pr-6">
                    <div className="w-full -ml-12">
                        {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 w-full" role="alert">
                                <span class="font-medium"></span> {error}
                        </div>}

                        {successMessage && <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 w-full" role="alert">
                                        <span class="font-medium"></span> {successMessage}
                        </div>}

                        <div className="flex justify-center w-screen md:justify-end mt-4">
                                <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-xl text-sm px-3 py-3 md:px-6 md:py-3 me-2 mb-2 lg:mr-16 transition" onClick={deleteRecordsHandler}>Delete records</button>
                                <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-xl text-sm px-3 py-3 md:px-6 md:py-3 me-2 mb-2 lg:mr-16" onClick={addStudentHandler}>Add student</button>
                        </div>
                    </div>
                </div> */}
                
            </div>

            {error && <div class="p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                <span class="font-medium"></span> {error}
            </div>}

            {successMessage && <div class="p-4 mb-2 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
                        <span class="font-medium"></span> {successMessage}
            </div>}

            <div className="flex justify-center md:justify-end">
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-xl text-sm px-3 py-3 md:px-6 md:py-3 me-2 mb-2 lg:mr-16 transition" onClick={deleteRecordsHandler}>Delete records</button>
                    <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-xl text-sm px-3 py-3 md:px-6 md:py-3 me-2 mb-2 lg:mr-16" onClick={addStudentHandler}>Add student</button>
            </div>
        </div>
    )
}

export default AddStudentsScreen