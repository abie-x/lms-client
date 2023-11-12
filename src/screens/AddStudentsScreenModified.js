import React, {useState} from "react";
import datepicker from 'flowbite-datepicker/Datepicker';
import Select from "react-dropdown-select";
import MultiSelect from 'react-select'
import makeAnimated from 'react-select/animated';

const AddStudentsScreenModified = () => {
    
    const coordinatorOptions = [
        { 
          value: 1,
          label: "Akshaya"
        },
        {
          value:  2,
          label: "E-seva"
        },
        {
            value: 3,
            label: "Tele caller"
        }
    ];

    const courseOptions = [
        { value: 'History', label: 'History' },
        { value: 'Politics', label: 'Politics' },
        { value: 'English', label: 'English' },
        { value: 'Politics1', label: 'Politics1' },
        { value: 'English1', label: 'English1' }
    ]
      

    const [value, setValues] = useState(null)
    const [courseValue, setCourseValue] = useState(null)

    const animatedComponents = makeAnimated();

    return (
        <div className="px-6 py-12">
            {/* <h1 className="text-lg text-blue-800 font-semibold">This may be the start of something great!</h1> */}
            <h3 className="text-md text-blue-500 font-semibold mt-2 mb-4">Add student data from below</h3>
            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
                <div class="mb-6">
                    <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
                    <input type="name" id="name" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div class="mb-6">
                    <label for="name" class="block text-sm font-medium text-gray-900">DOB</label>
                    <input datepicker  type="date" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="Select date" />
                </div>
                <div class="mb-6">
                    <label for="mob" class="block text-sm font-medium text-gray-900">Mobile number</label>
                    <input type="number" id="mob" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div class="mb-6">
                    <label for="parentMob" class="block text-sm font-medium text-gray-900">Parent mobileNumber</label>
                    <input type="number" id="parentMob" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required/>
                </div>
                <div class="mb-6">
                    <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div class="mb-6">
                    <label for="pwd" class="block text-sm font-medium text-gray-900">NIOS password</label>
                    <input type="text" id="pwd" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div class="mb-6">
                    <label for="result" class="block text-sm font-medium text-gray-900">Previous result</label>
                    <input type="text" id="result" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div className="mb-6">
                    <label for="coordinator" class="block text-sm font-medium text-gray-900">Previous result</label>
                    <Select options={coordinatorOptions} onChange={(values) => setValues(values)} style={{borderRadius: '1.5rem', padding: '0.625rem', borderWidth: '1px', borderColor: 'RGB(75, 85, 99)', backgroundColor: 'RGB(255, 255, 255)'}} />
                </div>
                <div class="mb-6">
                    <label for="result" class="block text-sm font-medium text-gray-900">Previous result</label>
                    <MultiSelect options={courseOptions} styles={{
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'blue' : 'red',
                        borderRadius: '1.5rem',
                        padding: '0.2rem', 
                        borderWidth: '1px', 
                        borderColor: 'RGB(75, 85, 99)', 
                        backgroundColor: 'RGB(255, 255, 255)'
                    }),}} isMulti  closeMenuOnSelect={false}  onChange={(e) => console.log(e)}/>
                </div>
                <div class="mb-6">
                    <label for="result" class="block text-sm font-medium text-gray-900">Previous result</label>
                    <input type="text" id="result" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div class="mb-6">
                    <label for="result" class="block text-sm font-medium text-gray-900">Previous result</label>
                    <input type="text" id="result" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
                <div class="mb-6">
                    <label for="result" class="block text-sm font-medium text-gray-900">Previous result</label>
                    <input type="text" id="result" class="bg-white border border-gray-600 text-gray-900 text-sm rounded-3xl block w-full p-2.5" placeholder="John doe" required />
                </div>
            </div>
        </div>
    )
}

export default AddStudentsScreenModified