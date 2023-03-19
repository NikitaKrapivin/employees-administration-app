import React from 'react';
import MyInput from  './UI/MyInput/MyInput'

const DivInput = (props) => {
    return (
        <div className='DivBtn'>
            {props.name}
            <MyInput type = 'text'/>
        </div>
    );
};

export default DivInput;