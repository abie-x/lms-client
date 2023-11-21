import React, {useState} from "react";
import Select from 'react-select';

const UpdateFeeStatusScreen = () => {

    const [feeType, setFeeType] = useState(null)
    const [paymentType, setPaymentType] = useState(null)
    const [isFocused, setIsFocused] = useState(true);
    const [amount, setAmount] = useState('')

    const feeOptions = [
        {
            label: 'Registration fee',
            value: 'registrationFee'
        },
        {
            label: 'Exam fee',
            value: 'examFee'
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

    return (
        <div className="h-fit w-screen bg-slate-100 px-6 md:px-20 py-8 lg:grid lg:grid-cols-2">
            <div className="h-full w-full md:px-28 lg:px-4 xl:px-28 xl:mt-2 md:py-3 bg-green-100" >
                <h3 className="text-base md:text-xl font-semibold">Student details</h3>
                <div className="mt-5 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Name: </h4>
                    <h4 className="text-sm md:text-lg">Sreekumar R</h4>
                </div>
                <div className="mt-2 text-sm flex gap-4">
                    <h4 className="text-sm md:text-lg">Batch: </h4>
                    <h4 className="text-sm md:text-lg">October 2022</h4>
                </div>
                <div className="w-full h-36 mt-6 bg-slate-200 rounded-2xl p-5">
                    <h3 className="text-sm font-semibold">Past payment status</h3>
                    <div className="grid grid-cols-5 gap-2 mt-4">
                        <div className="w-full bg-blue-100 me-2 mb-2">
                            <button type="button" class="w-full text-green-500 border border-green-400 font-medium rounded-lg text-sm px-1 py-1">
                                <div>Reg</div>
                                <div>Fee</div>
                            </button>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" class="w-full text-green-500 border border-green-400 font-medium rounded-lg text-sm px-1 py-1">
                                <div>Exam</div>
                                <div>Fee</div>
                            </button>
                        </div>
                        <div className="w-full me-2 mb-2">
                            <button type="button" class="w-full text-red-500 border border-red-400 font-medium rounded-lg text-sm px-1 py-1">
                                <div>First</div>
                                <div>Term</div>
                            </button>
                            <label for="button" class="block text-xs font-medium text-red-600 mt-2 text-center">1000 bal</label>
                        </div>
                        <div className="w-full bg-blue-100 me-2 mb-2">
                            <button type="button" class="w-full text-red-500 border border-red-400 font-medium rounded-lg text-sm px-1 py-1">
                                <div>Sec</div>
                                <div>Term</div>
                            </button>
                        </div>
                        <div className="w-full bg-blue-100 me-2 mb-2">
                            <button type="button" class="w-full text-red-500 border border-red-400 font-medium rounded-lg text-sm px-1 py-1">
                                <div>Third</div>
                                <div>Term</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mb-3 mt-6 px-3">
                        <label for="feeType" class="block text-sm font-medium text-gray-900 mb-2">Select fee type</label>
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
                    <label className="text-xs md:text-sm font-medium text-gray-900 mb-2">Total fee: 3500 <span className="ml-5 text-red-500">Pending fee: 5000</span></label>
                </div>
                <div className="w-full flex justify-end mt-2 mb-2 bg-blue-300">
                    <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-red-800 focus:ring-4 font-medium rounded-md text-sm px-2 py-2 md:px-5 md:py-2.5 transition">Update fee</button>
                </div>
            </div> 
            <div className="hidden lg:block h-full w-full bg-red-300">
                
            </div>
        </div>
    )
}

export default UpdateFeeStatusScreen