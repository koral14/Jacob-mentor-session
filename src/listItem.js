import React from 'react';

const ListItem = ({ item, onRemove, handleToggle }) => {

    return (
        <li>
            <span
                style={{
                    textDecoration: item.isActive
                        ? 'none'
                        : 'line-through',
                }}
            >
                {item.name} <span> </span>
            </span>

            <button 
                type="button" 
                onClick={() => handleToggle(item.id)}
            >
                {item.isActive ? 'Undo' : 'Done'}
            </button> <span> </span>

            <button 
                type="button" 
                onClick={() => onRemove(item.id)}
            >
                Remove
            </button>
        </li> 
    );
};

export default ListItem;