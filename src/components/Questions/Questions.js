import React from 'react';
import Option from '../Option/Option';
import './Questions.css'

const Questions = ({ quiz }) => {
    const { question } = quiz;
    const seeAnswer = () => {
        console.log(quiz.correctAnswer)
    }
    return (
        <div className='question-section'>
            <div className='question-answer'>
                <h3 className='question'>Question: {question}</h3>
                <button onClick={seeAnswer}>See Answer</button>
            </div>
            <div>
                {
                    quiz.options.map(option => <Option
                        key={quiz.id}
                        option={option}
                    ></Option>)
                }
            </div>

        </div>
    );
};

export default Questions;