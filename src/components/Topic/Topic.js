import React from 'react';
import './Topic.css'

const Topic = ({ topic, startQuiz }) => {
    const { name, logo, total } = topic;

    return (
        <div className='topic-container'>
            <div className='img-container'>
                <img src={logo} alt=""></img>
            </div>
            <div className='details-container'>
                <h2>Quiz On {name}</h2>
                <div>
                    <p>Total Quiz : {total}</p>
                    <button onClick={startQuiz}>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;