import React from 'react';

const Option = ({ option }) => {

    return (
        <div>
            <input type="radio" id="topping" name="topping" value={option} />{option}
        </div>
    );
};

export default Option;