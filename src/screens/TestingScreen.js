import React from "react";
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1701778388326.json'

const TestingScreen = () => {

    return (
        <div>
            you are watching test screen
            <Lottie animationData={animationData} className="w-2/6 h-2/6" />
        </div>
    )

}

export default TestingScreen