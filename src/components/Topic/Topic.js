import React from 'react';

const Topic = ({ topic }) => {
    const { name } = topic;

    return (
        <div>

            <h3>Name : {name}</h3>
        </div>
    );
};

export default Topic;