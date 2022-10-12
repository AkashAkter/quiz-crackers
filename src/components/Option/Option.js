import React from 'react';
import './Option.css'

const Option = ({ option, correctAnswer }) => {

    const handleAnswer = () => {
        if (option === correctAnswer) {
            alert('Good Job. Your Answer is Correct.');
        }
        else {
            alert('So Sad. You are wrong in this time.')
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