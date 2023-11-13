import React, {useState} from "react";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import CDateRangePicker from '@coreui/react'

const AddStudentsScreen = () => {

    const courseOptions = [
        {
            value: 'SSLC',
            label: 'SSLC'
        },
        {
            value: 'PlusTwo',
            label: 'PlusTwo'
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

    const [name, setName] = useState('')
    const [place, setPlace] = useState('')
    const [course, setCourse] = useState(null)
    const [intake, setIntake] = useState(null)
    const [mode, setMode] = useState(null)
    const [phoneNum, setPhoneNum] = useState('')
    const [parentNum, setParentNum] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [branch, setBranch] = useState(null)
    const [admCoordinator, setAdmCoordinator] = useState('')

    const [inputType, setInputType] = useState('text')

    const changeIntake = (e) => {
        setIntake(e.value)
        console.log(e.value)
    }

    const changeCourse = (e) => {
        setCourse(e.value)
    }

    const addStudentHandler = async () => {
        console.log(name)
        console.log(place)
        console.log(course)
        console.log(intake)
        console.log(mode)
        console.log(phoneNum)
        console.log(parentNum)
        console.log(dob)
        console.log(email)
        console.log(branch)
        console.log(admCoordinator)
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
        <div className="px-6 py-12 h-fit w-screen">
            <h3 className="text-xl lg:text-2xl text-blue-500 font-semibold mt-2 mb-4 md:mt-8 md:mb-12">Add student data from below</h3>
            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-4 h-fit">
                <div class="mb-6">
                    <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Name</label>
                    <input type="text" id="name" value={name} class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-6">
                    <label for="place" class="block text-sm font-medium text-gray-900 mb-2">Place</label>
                    <input type="text" id="place" value={place} class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="Edappal" required onChange={(e) => setPlace(e.target.value)}/>
                </div>
                <div class="mb-6">
                    <label for="course" class="block text-sm font-medium text-gray-900 mb-2">Course</label>
                    <Select options={courseOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                        borderRadius: '1.5rem',
                        padding: '0.2rem', 
                        borderWidth: '1px', 
                        borderColor: 'RGB(75, 85, 99)', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} closeMenuOnSelect={true} isSearchable={false} onChange={changeCourse} controlShouldRenderValue={course ? true : false}/>
                </div>
                <div class="mb-6">
                    <label for="intake" class="block text-sm font-medium text-gray-900 mb-2">Intake</label>
                    <Select options={intakeOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                        borderRadius: '1.5rem',
                        padding: '0.2rem', 
                        borderWidth: '1px', 
                        borderColor: 'RGB(75, 85, 99)', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={changeIntake} controlShouldRenderValue={intake ? true : false}/>
                </div>
                <div class="mb-6">
                    <label for="mode" class="block text-sm font-medium text-gray-900 mb-2">Mode</label>
                    <Select options={modeOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                        borderRadius: '1.5rem',
                        padding: '0.2rem', 
                        borderWidth: '1px', 
                        borderColor: 'RGB(75, 85, 99)', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setMode(e.value)} controlShouldRenderValue={mode ? true : false} />
                </div>
                <div class="mb-6">
                    <label for="phoneNum" class="block text-sm font-medium text-gray-900 mb-2">Phone number</label>
                    <input type="number" id="phoneNum" value={phoneNum} class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="0123456789" required onChange={(e) => setPhoneNum(e.target.value)}/>
                </div>
                <div class="mb-6">
                    <label for="parentNum" class="block text-sm font-medium text-gray-900 mb-2">Parent number</label>
                    <input type="number" id="parentNum" value={parentNum} class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="0123456789" required onChange={(e) => setParentNum(e.target.value)} />
                </div>
                <div class="mb-6">
                    <label for="dob" class="block text-sm font-medium text-gray-900 mb-2">Date of Birth</label>
                    <input type='date' value={dob}  onChange={(e) => setDob(e.target.value)}   class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="Select date" />
                </div>
                <div class="mb-6">
                    <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input type="text" value={email} id="email" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="admin@linfield.com" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-6">
                    <label for="branch" class="block text-sm font-medium text-gray-900 mb-2">Branch</label>
                    <Select options={branchOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                        borderRadius: '1.5rem',
                        padding: '0.2rem', 
                        borderWidth: '1px', 
                        borderColor: 'RGB(75, 85, 99)', 
                        backgroundColor: 'RGB(255, 255, 255)',
                    }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setBranch(e.value)} controlShouldRenderValue={branch ? true : false}/>
                </div>
                <div className="mb-6">
                    <label for="admCoordinator" class="block text-sm font-medium text-gray-900 mb-2">Admission Coordinator</label>
                    <input type="text" value={admCoordinator} id="admCoordinator" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="Nishad" required onChange={(e) => setAdmCoordinator(e.target.value)} />
                </div> 
            </div>
            <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-3xl text-sm px-4 py-4 md:px-8 md:py-3 me-2 mb-2 lg:mr-16" onClick={deleteRecordsHandler}>Delete records</button>
                    <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-3xl text-sm px-8 py-3 me-2 mb-2 lg:mr-16" onClick={addStudentHandler}>Add student</button>
            </div>
        </div>
    )
}

export default AddStudentsScreen