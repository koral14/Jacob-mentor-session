import React, {useEffect, useState} from 'react';

const InputField = (props) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <input placeholder='enter your name' onChange={handleChange} /><br />
            {`Hou are you ${props.text}?`}
        </>
    )
}

export default InputField;