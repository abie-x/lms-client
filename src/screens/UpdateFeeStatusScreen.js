import React, {useState, useEffect} from "react";
import Select from 'react-select';
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom'
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1701778388326.json'

const UpdateFeeStatusScreen = () => {

    const navigate = useNavigate()

    const { state } = useLocation();
    const { id } = state ;

    const [feeType, setFeeType] = useState(null)
    const [paymentType, setPaymentType] = useState(null)
    const [isFocused, setIsFocused] = useState(true);
    const [studentDetails, setStudentDetails] = useState(null)
    const [amount, setAmount] = useState(null)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [feeName,setFeeName]= useState(null)
    const [errVisible,setErrVisible] = useState(true)

    const [student, setStudent] = useState(null)


    const feeOptions = [
        {
            label: 'Admission fee',
            value: 'admissionFees'
        },
        {
            label: 'Registration fee',
            value: 'registrationFees'
        },
        {
            label: 'Exam fee',
            value: 'examFees'
        }, 
        {
            label: 'First term fee',
            value: 'firstTerm'
        },
        {
            label: 'Second term fee',
            value: 'secondTerm'
        },
        {
            label: 'Third term fee',
            value: 'thirdTerm'
        },
        {
            label: 'Custom',
            value: 'custom'
        }
    ]

    const paymentOptions = [
        {
            label: 'Full payment',
            value: 'fullPayment'
        },
        {
            label: 'Partial payment',
            value: 'partialPayment'
        }
    ]

    const paymentOptionsUpdated = [
        {
            label: 'Full payment',
            value: 'fullPayment'
        }
    ]

    //getting the student details
    useEffect(() => {
        const getStudentData = async () => {
            const {data} = await axios.get(`https://lobster-app-yjjm5.ondigitalocean.app/api/students/${id}`)
            console.log('sending data...')
            console.log(data)
            const {message, name} = data
            if(name) {
                setStudent(data)
            } else if(message) {
                setError(message)
            }

        }
        getStudentData()
            
    }, [])
    console.log(student);

    useEffect(() => {
        const changeAmount = () => {
            if (feeType === 'registrationFees' && paymentType === 'fullPayment' && student) {
                setAmount(student.feeDetails.registrationFees);
            } else if (feeType === 'examFees' && paymentType === 'fullPayment' && student) {
                setAmount(student.feeDetails.examFees);
            } else if (feeType === 'firstTerm' && paymentType === 'fullPayment' && student) {
                setAmount(student.feeDetails.installments[0].amount - student.feeDetails.installments[0].paidAmount);
            } else if (feeType === 'secondTerm' && paymentType === 'fullPayment' && student) {
                setAmount(student.feeDetails.installments[1].amount - student.feeDetails.installments[1].paidAmount);
            } else if (feeType === 'thirdTerm' && paymentType === 'fullPayment' && student) {
                setAmount(student.feeDetails.installments[2].amount - student.feeDetails.installments[2].paidAmount);
            } else {
                // Set a default value or handle the case when none of the conditions match
                return
            }
        };

        changeAmount()
    }, [feeType, paymentType])

    useEffect(() => {
        if (feeType === 'examFees'  && (!student || !student.feeDetails || !student.feeDetails.examFees)) {
            setError('Error : Exam fee not added');
            setErrVisible(true)
            setTimeout(() => {
                setErrVisible(false)
            },  3000);  
        }
        else if(feeType === 'registrationFees' && (!student || !student.feeDetails || !student.feeDetails.registrationFees)){
            setError('Error : Registration fee not added');
            setErrVisible(true)
            setTimeout(() => {
                setErrVisible(false)
            },  3000); 
        }
        else{
            setError(null); 
        }
    }, [feeType, student]);

    

    // const updateFeeHandler = async () => {

    //     if(!feeType || !paymentType || !amount) {
    //         setError('Please fill all required fields')
    //     } else {
    //         const config = {
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //         }
    
    //         console.log('sending requests..')
    //         console.log(paymentType);
    
    //         let installmentNumber
    //         console.log(paymentType)
    //         // paymentType === 'firstTerm' ? installmentNumber = 1 : paymentType === 'secondTerm' ? installmentNumber = 2 : paymentType === 'thirdTerm' ? installmentNumber = 3 : installmentNumber = 0
    //         if(feeType === 'firstTerm') {
    //             installmentNumber = 1
    //         } else if(feeType === 'secondTerm') {
    //             installmentNumber = 2
    //         } else if(feeType === 'thirdTerm') {
    //             installmentNumber = 3
    //         } else {
    //             installmentNumber = 4
    //         }
    
    //         const { data } = await axios.put(
    //             'https://lobster-app-yjjm5.ondigitalocean.app/api/students/fees/nios',
    //             { phoneNumber: student.phoneNumber, feeType, installmentNumber, amount: parseInt(amount), },
    //             config
    //         )
    
    //         const {message} = data
    
    //         if(data.status === 'success') {
    //             setSuccessMessage('Fees added successfully')
    //             setTimeout(() => {
    //                 navigate('/home');
    //               }, 1000);
    //         } else if(message) {
    //             setError(message)

                

    //         }
    //     }

    //     const changeFeeAmount = () => {
    //         if(feeType === 'registrationFees' && paymentType === 'fullPayment') {

    //         }
    //     }

    
        
        

    //     // if(data.name) {
    //     //     navigate('/home')
    //     // }
    // }

    const updateFeeHandler = async () => {

        if(feeType === 'custom') {

            console.log(student.phoneNumber)
            console.log(feeType)
            console.log(amount)

            // { phoneNumber: student.phoneNumber, feeType, installmentNumber, amount: parseInt(amount) },

            const config = {
                headers: {
                  'Content-Type': 'application/json',
                },
            }
    
            console.log('sending requests..')
            console.log(paymentType);
    
            let installmentNumber
            console.log(paymentType)
            // paymentType === 'firstTerm' ? installmentNumber = 1 : paymentType === 'secondTerm' ? installmentNumber = 2 : paymentType === 'thirdTerm' ? installmentNumber = 3 : installmentNumber = 0
            if(feeType === 'firstTerm') {
                installmentNumber = 1
            } else if(feeType === 'secondTerm') {
                installmentNumber = 2
            } else if(feeType === 'thirdTerm') {
                installmentNumber = 3
            } else {
                installmentNumber = 4
            }
    
            const { data } = await axios.put(
                'https://lobster-app-yjjm5.ondigitalocean.app/api/students/fees/nios',
                { phoneNumber: student.phoneNumber, feeName, amount: parseInt(amount) },
                config
            )
    
            const {message} = data
    
            if(data.status === 'success') {
                setSuccessMessage('Fees added successfully')
                setTimeout(() => {
                    navigate('/home');
                  }, 1000);
            } else if(message) {
                setError(message)
            }
            
        } else {
            if(!feeType || !paymentType || !amount) {
                setError('Please fill all required fields')
            } else {
                const config = {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                }
        
                console.log('sending requests..')
                console.log(paymentType);
        
                let installmentNumber
                console.log(paymentType)
                // paymentType === 'firstTerm' ? installmentNumber = 1 : paymentType === 'secondTerm' ? installmentNumber = 2 : paymentType === 'thirdTerm' ? installmentNumber = 3 : installmentNumber = 0
                if(feeType === 'firstTerm') {
                    installmentNumber = 1
                } else if(feeType === 'secondTerm') {
                    installmentNumber = 2
                } else if(feeType === 'thirdTerm') {
                    installmentNumber = 3
                } else {
                    installmentNumber = 4
                }
        
                const { data } = await axios.put(
                    'https://lobster-app-yjjm5.ondigitalocean.app/api/students/fees/nios',
                    { phoneNumber: student.phoneNumber, feeType, installmentNumber, amount: parseInt(amount) },
                    config
                )
        
                const {message} = data
        
                if(data.status === 'success') {
                    setSuccessMessage('Fees added successfully')
                    setTimeout(() => {
                        navigate('/home');
                      }, 1000);
                } else if(message) {
                    setError(message)
                }
            }
    
            const changeFeeAmount = () => {
                if(feeType === 'registrationFees' && paymentType === 'fullPayment') {
    
                }
            }
        }
    }

    return (
        <div className="h-screen w-screen bg-slate-100 px-6 md:px-20 py-8 lg:py-6 lg:grid lg:grid-cols-2 lg:overflow-y-hidden">
            <div className="h-full w-full md:px-28 lg:px-4 xl:px-28 md:py-3 bg-slate-100 " >
                <h3 className="text-base md:text-xl font-semibold">Student details</h3>
                <div className="mt-5 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Name: </h4>
                    <h4 className="text-sm md:text-lg">{student && student.name}</h4>
                </div>
                <div className="mt-2 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Batch: </h4>
                    <h4 className="text-sm md:text-lg">{student && `${student.intake} ${student.year}`}</h4>

                </div>
                <div className="mt-2 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Course: </h4>
                    <h4 className="text-sm md:text-lg">{student && `${student.course} `}</h4>

                </div>
                <div className="w-full  mt-6 bg-slate-200 rounded-2xl p-6 mb-6">
                    <h3 className="text-sm font-semibold">Past payment status</h3>
                    <div className="grid grid-cols-3 gap-2 mt-4 mb-4">
                        <div className="w-full me-2 mb-2">
                            <button type="button" className= {`w-full ${student && student.feeDetails.admissionFeePaid ? 'text-green-500' : 'text-red-500'} border ${student && student.feeDetails.admissionFeePaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>Adm</div>
                                <div>Fee</div>
                            </button>
                            <label for="button" class={`${student && student.feeDetails.admissionFeePaid ? 'hidden' : 'block'} text-xs font-medium text-red-600 mt-2 text-center`}>{student && student.feeDetails.admissionFeePaidAmount > 0 && `${student.feeDetails.admissionFees - student.feeDetails.admissionFeePaidAmount} bal`}</label>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" className={`w-full ${student && student.feeDetails.registrationFeePaid ? 'text-green-500' : 'text-red-500'}  border ${student && student.feeDetails.registrationFeePaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>Reg</div>
                                <div>Fee</div>
                            </button>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" className= {`w-full ${student && student.feeDetails.examFeePaid ? 'text-green-500' : 'text-red-500'} border ${student && student.feeDetails.examFeePaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>Exam</div>
                                <div>Fee</div>
                            </button>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" className={`w-full ${student && student.feeDetails.installments[0].isPaid ? 'text-green-500' : 'text-red-500'} border ${student && student.feeDetails.installments[0].isPaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>First</div>
                                <div>Term</div>
                            </button>
                            <label for="button" class={`${student && student.feeDetails.installments[0].isPaid ? 'hidden' : 'block'} text-xs font-medium text-red-600 mt-2 text-center`}>{student && student.feeDetails.installments[0].paidAmount > 0 && `${student.feeDetails.installments[0].amount - student.feeDetails.installments[0].paidAmount} bal`}</label>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" className={`w-full ${student && student.feeDetails.installments[1].isPaid ? 'text-green-500' : 'text-red-500'} border ${student && student.feeDetails.installments[1].isPaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>Sec</div>
                                <div>Term</div>
                            </button>
                            <label for="button" class={`${student && student.feeDetails.installments[1].isPaid ? 'hidden' : 'block'} text-xs font-medium text-red-600 mt-2 text-center`}>{student && student.feeDetails.installments[1].paidAmount > 0 && `${student.feeDetails.installments[1].amount - student.feeDetails.installments[1].paidAmount} bal`}</label>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" className={`w-full ${student && student.feeDetails.installments[2].isPaid ? 'text-green-500' : 'text-red-500'} border ${student && student.feeDetails.installments[2].isPaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>Third</div>
                                <div>Term</div>
                            </button>
                            <label for="button" class={`${student && student.feeDetails.installments[2].isPaid ? 'hidden' : 'block'} text-xs font-medium text-red-600 mt-2 text-center`}>{student && student.feeDetails.installments[2].paidAmount > 0 && `${student.feeDetails.installments[2].amount - student.feeDetails.installments[2].paidAmount} bal`}</label>
                        </div>
                    </div>
                </div>
                <div class="mb-3 mt-6 px-3">
                        <label for="feeType" class="block text-sm font-medium text-gray-900 mb-2">Select payment type</label>
                        <Select options={feeOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: '.5rem',
                            padding: '0.2rem', 
                            borderWidth: '0px', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} className="border-white" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setFeeType(e.value)} name="feeType" controlShouldRenderValue={feeType ? true : feeType === false ? true : false}/>
                </div>

                {
                    feeType === 'custom' && <div class="mb-3 mt-6 px-3">
                    <label for="enrollmentNumber" class="block text-sm font-medium text-gray-900 mb-2">Fee Name</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter the fee name" onChange={(e)=>setFeeName(e.target.value)} required/>


                </div>
                }
                {console.log(`fee name : ${feeName}`)}


                <div class={`mb-3 mt-6 px-3 ${feeType === 'registrationFees' || feeType === 'examFees' || feeType === 'custom' ||feeType=== null ? 'hidden' : 'block'}`}>
                        <label for="paymentType" class="block text-sm font-medium text-gray-900 mb-2">Select fee type</label>
                        <Select options={paymentOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: '.5rem',
                            padding: '0.2rem', 
                            borderWidth: '0px', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} className="border-white" closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setPaymentType(e.value)} name="paymentType" controlShouldRenderValue={paymentType ? true : paymentType === false ? true : false}/>
                </div>
                
                <div class={`mb-3 mt-6 px-3 ${feeType === 'registrationFees' || feeType === 'examFees' || feeType=== null ? 'block' : 'hidden'}`}>
                        <label for="paymentType" class="block text-sm font-medium text-gray-900 mb-2">Select fee type</label>
                        <Select options={paymentOptionsUpdated} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: '.5rem',
                            padding: '0.2rem', 
                            borderWidth: '0px', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} className="border-white" closeMenuOnSelect={true} isSearchable={false} name="paymentType" onChange={(e) => setPaymentType(e.value)} controlShouldRenderValue={paymentType ? true : paymentType === false ? true : false}/>

                        
                </div>

                
                
                
                
                <div class="mb-3 mt-6 px-3">
                    <label for="enrollmentNumber" class="block text-sm font-medium text-gray-900 mb-2">Amount</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="1000" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} required/>
                </div>
                {console.log('the amount is', amount)}
                <div className="w-full px-3 flex justify-end">
                    <label className="text-xs md:text-sm font-medium text-gray-900 mb-2">Total fee: {student && student.feeDetails.totalAmount} <span className="ml-5 text-red-500">Pending fee: {student && student.feeDetails.totalAmount - student.feeDetails.paidAmount}</span></label>
                </div>
                {error && errVisible && <div class="p-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                            <span class="font-medium"></span> {error}
                </div>}
                {successMessage && <div class="p-4 mb-4 mt-2 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
                            <span class="font-medium"></span> {successMessage}
                </div>}
                
                {/* if student.feeDetails.examFees field does not exist just do conditional rendering with an error emmeage like add examfee to pay */}

                {/* {
                   feeType === 'examFees' &&  (!student || !student.feeDetails || !student.feeDetails.examFees) ? setError('Error : Registration fee not added.') (
                
                        {error}
                    ) : null
                }
                {
                   feeType === 'registrationFees' &&  (!student || !student.feeDetails || !student.feeDetails.registrationFees) ? setError(true) (
                    
                        
                    ) : null
                } */}

                


                <div className="w-full flex justify-end mt-2 mb-1">
                <button
                    type="button"
                    className={`font-medium rounded-md text-sm px-2 py-2 md:px-5 md:py-2.5 transition ${error ? 'bg-green-300 text-white cursor-not-allowed' : 'bg-green-500 text-white'}`}
                    onClick={updateFeeHandler}
                    disabled={!!error && errVisible}
                >
                    Update fee
                </button>
                </div>
                {console.log('id', id)}
            </div> 
            <div className="hidden lg:flex h-screen w-full justify-center items-center bg-slate-100">
                <div className="w-full h-screen flex justify-center">
                    <Lottie animationData={animationData} className="w-5/6 h-full" />
                </div>
            </div>
            {console.log(`printing the feeType: ${feeType}`)}
        </div>
    )
}

export default UpdateFeeStatusScreen
