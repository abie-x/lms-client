import React from "react";

const RadioComponent = () => {
    return (  
        <div className="md:flex">
            <label class="text-md font-semibold text-gray-700 md:mt-2 md:mr-4">Choose your stream</label>
            <div class="flex justify-between mt-2">
                <div class="flex items-center me-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label for="Stream1" class="ms-2 text-lg font-semibold text-gray-700">1</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label for="Stream2" class="ms-2 text-sm font-medium text-gray-700">2</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label for="inline-checked-radio" class="ms-2 text-sm font-medium text-gray-700">3</label>
                </div>
                <div class="flex items-center">
                    <input disabled id="inline-disabled-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label for="inline-disabled-radio" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">4</label>
                </div>
            </div>
        </div>
    )
}

export default RadioComponent