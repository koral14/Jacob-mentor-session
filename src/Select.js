import React, { useEffect, useState } from 'react';

const Select = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log(value)
    }, [value, setValue]);

    const handleMenuOnChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <select onChange={handleMenuOnChange} value="Select from menu:">
                <option>Select from menu:</option>
                <option>Burger</option>
                <option>Steak</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Dessert</option>
            </select>
        </>
    )
}

export default Select;