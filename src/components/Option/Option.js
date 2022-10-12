import React from 'react';
import './Option.css';
import { toast } from 'react-toastify';

const Option = ({ option, correctAnswer }) => {

    const handleAnswer = () => {
        if (option === correctAnswer) {
            toast.success('Your Answer is Correct.');
        }
        else {
            toast.error('You are wrong in this time.')
        }
    }

    return (
        <div className='option-button'>

            <div>
                <input onClick={handleAnswer} type="radio" id={option} name="drone" value={option} />
                <label htmlFor={option}>{option}</label>
            </div>


        </div>
    );
};

export default Option;