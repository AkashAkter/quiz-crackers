import React from 'react';
import './Option.css'

const Option = ({ option, correctAnswer }) => {

    const clicked = () => {
        // console.log(option);
        if (option === correctAnswer) {
            alert('Correct');
        }
        else {
            alert('Wrong')
        }
    }


    return (
        <div className='option-button'>

            <div>
                <input onClick={clicked} type="radio" id={option} name="drone" value={option} />
                <label htmlFor={option}>{option}</label>
            </div>

        </div>
    );
};

export default Option;