import React from 'react';
import { toast } from 'react-toastify';
import './Option.css'

const Option = ({ option, correctAnswer }) => {

    const handleToast = (value) => {
        if (value.checked && value.value === correctAnswer) {
            toast.success('Correct Answer')
        }
        else {
            toast.error('Wrong')
        }
    }

    return (
        <div className='option-button'>

            <div>
                <input onChange={(e) => handleToast(e.target)} type="radio" id={option} name="drone" value={option} />
                <label htmlFor={option}>{option}</label>
            </div>

        </div>
    );
};

export default Option;