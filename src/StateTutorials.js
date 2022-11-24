import React, { useState } from 'react';

const StateTutorial = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button type="button" onClick={handleClick}>
                Click me
            </button>
            <p>You clicked {count} times.</p>
        </>
    )
  };

export default StateTutorial;