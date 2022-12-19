import React, { Fragment } from 'react';
import ListItem from './listItem';

const List = ({ list, onRemove, handleToggle }) => (
    <ul>
        {list.map((item) => (
            <Fragment key={item.id}>
                <ListItem 
                    item={item} 
                    onRemove={onRemove}
                    handleToggle={handleToggle}
                />
                <br />
            </Fragment>
        ))}
    </ul>
    
)

export default List;