import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const OnlyTopics = () => {
    const topics = useLoaderData();

    const startQuiz = () => {
        console.log('Clicked');

    }

    return (
        <div>
            <h1 className='header'>Select Your Quiz Topic</h1>
            <div className='topics-container'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                        startQuiz={startQuiz}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default OnlyTopics;