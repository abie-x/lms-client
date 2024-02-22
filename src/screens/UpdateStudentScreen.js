import React, { useState, useEffect } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";

const animatedComponents = makeAnimated();

const UpdateStudentScreen = () => {

    const { state } = useLocation();
    const { id } = state

    const navigate = useNavigate()

    const [name, setName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [parentNumber, setParentNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [prevResult, setPrevResult] = useState(null)
    const [refNo, setRefNo] = useState(null)
    const [onDemandExam, setOnDemandExam] = useState(null)
    const [onDemandExamMonth, setOnDemandExamMonth] = useState(null)
    const [subjects, setSubjects] = useState(null)
    const [onDemandSubjects, setOnDemandSubjects] = useState(null)
    const [optionalSubjectsExam, setOptionalSubjectsExam] = useState(null)
    const [optionalSubjects, setOptionalSubjects] = useState(null)
    const [toc, setToc] = useState(null)
    const [tocSubjects, setTocSubjects] = useState(null)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [examFee, setExamFee] = useState(null)
    const [registrationFee, setRegistrationFee] = useState(null)

    const booleanOptions = [
        {
            label: 'Yes',
            value: true
        },
        {
            label: 'No',
            value: false
        }
    ]

    const onDemandExamMonthOptions = [
        {
            label: 'January',
            value: 'January'
        },
        {
            label: 'February',
            value: 'February'
        },
        {
            label: 'March',
            value: 'March'
        },
        {
            label: 'April',
            value: 'April'
        },
        {
            label: 'May',
            value: 'May'
        },
        {
            label: 'June',
            value: 'June'
        },
        {
            label: 'July',
            value: 'July'
        },
        {
            label: 'August',
            value: 'August'
        },
        {
            label: 'September',
            value: 'September'
        },
        {
            label: 'October',
            value: 'October'
        },
        {
            label: 'November',
            value: 'November'
        },
        {
            label: 'December',
            value: 'December'
        }
    ]

    const onDemandSubjectsOptions = [
        {
            label: 'History',
            value: 'History'
        },
        {
            label: 'Politics',
            value: 'Politics'
        },
        {
            label: 'Geography',
            value: 'Geography'
        },
        {
            label: 'Mathematics',
            value: 'Mathematics'
        },
        {
            label: 'Chemistry',
            value: 'Chemistry'
        }
    ]

    const optionalSubjectsOptions = [
        {
            label: 'History',
            value: 'History'
        },
        {
            label: 'Politics',
            value: 'Politics'
        },
        {
            label: 'Geography',
            value: 'Geography'
        },
        {
            label: 'Mathematics',
            value: 'Mathematics'
        },
        {
            label: 'Chemistry',
            value: 'Chemistry'
        }
    ]

    useEffect(() => {
        const fetchStudentDetails = async () => {
            const { data, message } = await axios.get(
                `https://lobster-app-yjjm5.ondigitalocean.app/api/students/${id}`
            )

            if (data) {
                setName(data.name)
                setPhoneNumber(data.phoneNumber)
                setParentNumber(data.parentNumber)
                setEmail(data.email)
            }
        }

        fetchStudentDetails()
    }, [])

    const valuesOnlyArraySubjects = (e) => {
        const newSubjects = e.map(obj => obj.value);
        setSubjects(newSubjects)

    }

    const valuesOnlyOptionalSubjects = (e) => {
        const newOptionalSubjects = e.map(obj => obj.value)
        setOptionalSubjects(newOptionalSubjects)
    }

    const valuesOnlyArrayTocSubjects = (e) => {
        const newToc = e.map(obj => obj.value)
        setTocSubjects(newToc)
    }

    const updateStudentHandler = async () => {
        console.log('iam sending requests')
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const requestBody = {
            ...(name !== null && { name }),
            ...(phoneNumber !== null && { phoneNumber }),
            ...(parentNumber !== null && { parentNumber }),
            ...(email !== null && { email }),
            ...(password !== null && { password }),
            ...(prevResult !== null && { results: prevResult }),
            ...(refNo !== null && { referenceNumber: refNo }),
            ...(onDemandExam !== null && { onDemandExam }),
            ...(onDemandExamMonth !== null && { onDemandExamMonth }),
            ...(subjects !== null && { subjects }),
            ...(onDemandSubjects !== null && { onDemandSubjects }),
            ...(toc !== null && { toc }),
            ...(optionalSubjectsExam !== null && { optionalSubjectsExam }), //make a new db field in backend.
            ...(optionalSubjects !== null && { optionalSubjects }), //make a new db field in backend.
            ...(tocSubjects !== null && { tocSubjects }),
        }

        if (password !== confirmPassword) {
            setError('passswords doesnt match')
        } else {
            const { data } = await axios.put(
                `https://lobster-app-yjjm5.ondigitalocean.app/api/students/${id}`,
                requestBody,
                config
            )

            const { message, name } = data

            if (data.name) {
                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            } else if (message) {
                setError(message)
            }
        }
    }

    return (
        <div className="px-6 py-6 h-screen w-screen ">


            <div className="lg:grid lg:grid-cols-3  ">
                <div className="lg:block   lg:w-full hidden">
                    <img className=" w-.4 lg:absolute bottom-0" src="https://exeducation.kiev.ua/wp-content/uploads/2022/11/photo_svg-slider1-img1.svg" alt="" />
                </div>
                <div className="flex flex-col h-fit lg:col-span-2 lg:mx-24 md:mx-[20%]  ">
                    <h3 className="text-xl lg:text-2xl text-blue-500 font-semibold mt-2 mb-4 md:mt-8 md:mb-12">Add student data from below</h3>

                    <div className="lg:flex lg:flex-row lg:gap-x-14 ">
                        <div class="mb-6 lg:w-3/4">
                            <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Name</label>
                            <input type="text" id="name" value={name} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div class="mb-6 lg:w-1/2">
                            <label for="phoneNumber" class="block text-sm font-medium text-gray-900 mb-2">Phone number</label>
                            <input type="text" id="place" value={phoneNumber} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" onChange={(e) => setPhoneNumber(e.target.value)} required />
                        </div>
                        <div class="mb-6 lg:w-1/2">
                            <label for="parentNumber" class="block text-sm font-medium text-gray-900 mb-2">Parent number</label>
                            <input type="text" id="name" value={parentNumber} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" onChange={(e) => setParentNumber(e.target.value)} required />
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-x-14">
                        <div class="mb-6 lg:w-7/12">
                            <label for="email" class="block text-sm font-medium text-gray-900 mb-2">email</label>
                            <input type="text" id="email" value={email} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-sm font-medium text-gray-900 mb-2">password</label>
                            <input type="text" id="password" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="********" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div class="mb-6">
                            <label for="confirmPassword" class="block text-sm font-medium text-gray-900 mb-2">Confirm Password</label>
                            <input type="text" id="confirmPassword" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="********" onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-x-14">
                        <div class="mb-6 lg:w-full">

                            <label for="result" class="block text-sm font-medium text-gray-900 mb-2">Previous result</label>
                            <input type="text" id="result" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="www.nios.com/results?" onChange={(e) => setPrevResult(e.target.value)} required />
                        </div>
                        {/* <div class="mb-6">
                                        <label for="examCentre" class="block text-sm font-medium text-gray-900 mb-2">Exam centre</label>
                                        <input type="text" id="examCentre" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="Edappal" onChange={(e) => setExamCentre(e.target.value)} required />
                                    </div> */}
                        <div class="mb-6">
                            <label for="refNo" class="block text-sm font-medium text-gray-900 mb-2">Reference no</label>
                            <input type="text" id="refNo" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="ACXX789K" onChange={(e) => setRefNo(e.target.value)} required />
                        </div>


                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-x-14">
                        <div class="mb-6 lg:w-full">

                            <label for="result" class="block text-sm font-medium text-gray-900 mb-2">Registration Fee</label>
                            <input type="text" id="result" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="1000" onChange={(e) => setRegistrationFee(e.target.value)} required />
                        </div>
                        {/* <div class="mb-6">
                                        <label for="examCentre" class="block text-sm font-medium text-gray-900 mb-2">Exam centre</label>
                                        <input type="text" id="examCentre" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="Edappal" onChange={(e) => setExamCentre(e.target.value)} required />
                                    </div> */}
                        <div class="mb-6 lg:w-full">
                            <label for="refNo" class="block text-sm font-medium text-gray-900 mb-2">Exam Fee</label>
                            <input type="text" id="refNo" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="1000" onChange={(e) => setExamFee(e.target.value)} required />
                        </div>


                    </div>

                    <div class={`mb-6 lg:w-full`}>
                        <label for="subjects" class="block text-sm font-medium text-gray-900 mb-2">Subjects</label>
                        <Select options={onDemandSubjectsOptions} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                borderRadius: '12px',
                                padding: '0.05rem',
                                borderWidth: '1px',
                                borderColor: 'RGB(156 163 175)',
                                backgroundColor: 'RGB(255, 255, 255)',
                            }),
                        }} closeMenuOnSelect={false} components={animatedComponents} isMulti onChange={(e) => valuesOnlyArraySubjects(e)} onBlur={() => console.log('Blur')} onFocus={() => console.log('Focus')} />
                    </div>

                    {/* <div class="mb-6">
                                <label for="ondemandExam" class="block text-sm font-medium text-gray-900 mb-2">On demand exam</label>
                                <Select options={onDemandExamOptions} styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                        borderRadius: '12px',
                                        padding: '0.05rem', 
                                        borderWidth: '1px', 
                                        borderColor: 'RGB(156 163 175)', 
                                        backgroundColor: 'RGB(255, 255, 255)',
                                }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDemandExam(e.value)} controlShouldRenderValue={onDemandExam !== null ? true : false}/>
                            </div> */}
                    {/* <div class={`mb-6 ${!onDemandExam ? 'hidden' : 'block'}`}>
                                <label for="onDemandExamMonth" class="block text-sm font-medium text-gray-900 mb-2">On demand exam month</label>
                                <Select options={onDemandExamMonthOptions} styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                        borderRadius: '12px',
                                        padding: '0.05rem', 
                                        borderWidth: '1px', 
                                        borderColor: 'RGB(156 163 175)', 
                                        backgroundColor: 'RGB(255, 255, 255)',
                                }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDemandExamMonth(e.value)} controlShouldRenderValue={onDemandExamMonth ? true : false}/>
                            </div> */}
                    {/* <div class={`mb-6 ${onDemandExam ? 'block' : 'hidden'}`}>
                                <label for="onDemandExamMonth" class="block text-sm font-medium text-gray-900 mb-2">On demand exam month</label>
                                <Select options={onDemandExamMonthOptions} styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                        borderRadius: '12px',
                                        padding: '0.05rem', 
                                        borderWidth: '1px', 
                                        borderColor: 'RGB(156 163 175)', 
                                        backgroundColor: 'RGB(255, 255, 255)',
                                }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDEmandExamMonth(e.value)} controlShouldRenderValue={onDEmandExamMonth ? true : false}/>
                            </div> */}
                    {/* <div class={`mb-6 ${!onDemandExam ? 'hidden' : 'block'}`}>
                                <label for="onDemandExamSubjects" class="block text-sm font-medium text-gray-900 mb-2">OnDemand subjects</label>
                                <Select options={onDemandSubjectsOptions} styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                        borderRadius: '12px',
                                        padding: '0.05rem', 
                                        borderWidth: '1px', 
                                        borderColor: 'RGB(156 163 175)', 
                                        backgroundColor: 'RGB(255, 255, 255)',
                                }),}} closeMenuOnSelect={false}  components={animatedComponents} isMulti  onChange={(e) => valuesOnlyArrayOnDemandSubjects(e)} onBlur={() => console.log('Blur')} onFocus={() => console.log('Focus')}/>
                            </div> */}

                    <div className="lg:flex lg:flex-row lg:gap-x-14">
                        <div class="mb-6 lg:w-full">
                            <label for="optionalSubjects" class="block text-sm font-medium text-gray-900 mb-2">Optional subjects</label>
                            <Select options={booleanOptions} styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                    borderRadius: '12px',
                                    padding: '0.05rem',
                                    borderWidth: '1px',
                                    borderColor: 'RGB(156 163 175)',
                                    backgroundColor: 'RGB(255, 255, 255)',
                                }),
                            }} closeMenuOnSelect={true} isSearchable={false} onChange={(e) => setOptionalSubjectsExam(e.value)} controlShouldRenderValue={optionalSubjectsExam !== null ? true : false} />
                        </div>
                        <div class="mb-6 lg:w-full">
                            <label for="TOC" class="block text-sm font-medium text-gray-900 mb-2">TOC</label>
                            <Select options={booleanOptions} styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                    borderRadius: '12px',
                                    padding: '0.05rem',
                                    borderWidth: '1px',
                                    borderColor: 'RGB(156 163 175)',
                                    backgroundColor: 'RGB(255, 255, 255)',
                                }),
                            }} closeMenuOnSelect={true} isSearchable={false} onChange={(e) => setToc(e.value)} controlShouldRenderValue={toc !== null ? true : false} />
                        </div>
                    </div>
                    <div class={`mb-6 ${!optionalSubjectsExam ? 'hidden' : 'block'}`}>
                        <label for="optionalSubjectsOptions" class="block text-sm font-medium text-gray-900 mb-2">Optional subjects options </label>
                        <Select options={optionalSubjectsOptions} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                borderRadius: '12px',
                                padding: '0.05rem',
                                borderWidth: '1px',
                                borderColor: 'RGB(156 163 175)',
                                backgroundColor: 'RGB(255, 255, 255)',
                            }),
                        }} closeMenuOnSelect={false} components={animatedComponents} isMulti onChange={(e) => valuesOnlyOptionalSubjects(e)} onBlur={() => console.log('Blur')} onFocus={() => console.log('Focus')} />
                    </div>

                    <div class={`mb-6 ${!toc ? 'hidden' : 'block'}`}>
                        <label for="toc" class="block text-sm font-medium text-gray-900 mb-2">TOC subjects</label>
                        <Select options={onDemandSubjectsOptions} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                borderRadius: '12px',
                                padding: '0.05rem',
                                borderWidth: '1px',
                                borderColor: 'RGB(156 163 175)',
                                backgroundColor: 'RGB(255, 255, 255)',
                            }),
                        }} closeMenuOnSelect={false} components={animatedComponents} isMulti onChange={(e) => valuesOnlyArrayTocSubjects(e)} onBlur={() => console.log('Blur')} onFocus={() => console.log('Focus')} />
                    </div>
                    <div className="flex justify-center md:justify-end mt-5">
                        <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-xl text-sm w-40 h-10 px-4 me-2 mb-2" onClick={updateStudentHandler}>Add student</button>
                    </div>

                    {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        <span class="font-medium"></span> {error}
                    </div>}
                    {console.log(`printing the TOC ${toc}`)}





                </div>

            </div>
            </div>
            )
           
}

            export default UpdateStudentScreen