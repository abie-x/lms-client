import React, {useState, useEffect} from "react";
import Select from 'react-select';
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom'

const UpdateFeeStatusScreen = () => {

    const navigate = useNavigate()

    const { state } = useLocation();
    const { id } = state ;

    const [feeType, setFeeType] = useState(null)
    const [paymentType, setPaymentType] = useState(null)
    const [isFocused, setIsFocused] = useState(true);
    const [studentDetails, setStudentDetails] = useState(null)
    const [amount, setAmount] = useState(0)

    const [student, setStudent] = useState(null)

    const feeOptions = [
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

    //getting the student details
    useEffect(() => {
        const getStudentData = async () => {
            const {data} = await axios.get(`https://jellyfish-app-wmpnc.ondigitalocean.app/api/students/${id}`)
            console.log('sending data...')
            console.log(data)
            if(data) {
                setStudent(data)
            }
        }
        getStudentData()
    }, [])

    const updateFeeHandler = async () => {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        console.log('sending requests..')

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
            'https://jellyfish-app-wmpnc.ondigitalocean.app/api/students/fees/nios',
            { phoneNumber: student.phoneNumber, feeType, installmentNumber, amount: parseInt(amount) },
            config
        )

        if(data.status === 'success') {
            navigate('/home')
        } else {
            console.log(data.message)
        }

        // if(data.name) {
        //     navigate('/home')
        // }
    }

    return (
        <div className="h-fit w-screen bg-slate-100 px-6 md:px-20 py-8 lg:grid lg:grid-cols-2">
            <div className="h-full w-full md:px-28 lg:px-4 xl:px-28 xl:mt-2 md:py-3 bg-slate-100" >
                <h3 className="text-base md:text-xl font-semibold">Student details</h3>
                <div className="mt-5 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Name: </h4>
                    <h4 className="text-sm md:text-lg">{student && student.name}</h4>
                </div>
                <div className="mt-2 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Batch: </h4>
                    <h4 className="text-sm md:text-lg">{student && `${student.intake} ${student.year}`}</h4>
                </div>
                <div className="w-full h-36 mt-6 bg-slate-200 rounded-2xl p-5">
                    <h3 className="text-sm font-semibold">Past payment status</h3>
                    <div className="grid grid-cols-5 gap-2 mt-4">
                        <div className="w-full me-2 mb-2">
                            <button type="button" className={`w-full ${student && student.feeDetails.registrationFeePaid ? 'text-green-500' : 'text-red-500'}  border ${student && student.feeDetails.examFeePaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
                                <div>Reg</div>
                                <div>Fee</div>
                            </button>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" className= {`w-full ${student && student.feeDetails.examFeePaid ? 'text-green-500' : 'text-red-500'} border ${student && student.feeDetails.registrationFeePaid ? 'border-green-500' : 'border-red-500'} font-medium rounded-lg text-sm px-1 py-1`}>
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
                                <div>Sec</div>
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
                <div class="mb-3 mt-6 px-3">
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
                <div class="mb-3 mt-6 px-3">
                    <label for="enrollmentNumber" class="block text-sm font-medium text-gray-900 mb-2">Amount</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="CDJ1233J" onChange={(e) => setAmount(e.target.value)} required/>
                </div>
                <div className="w-full px-3 flex justify-end">
                    <label className="text-xs md:text-sm font-medium text-gray-900 mb-2">Total fee: {student && student.feeDetails.totalAmount} <span className="ml-5 text-red-500">Pending fee: {student && student.feeDetails.totalAmount - student.feeDetails.paidAmount}</span></label>
                </div>
                <div className="w-full flex justify-end mt-2 mb-1">
                    <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-red-800 focus:ring-4 font-medium rounded-md text-sm px-2 py-2 md:px-5 md:py-2.5 transition" onClick={updateFeeHandler}>Update fee</button>
                </div>
                {console.log('id', id)}
            </div> 
            <div className="hidden lg:block h-full w-full bg-red-300">
                
            </div>
        </div>
    )
}

export default UpdateFeeStatusScreen