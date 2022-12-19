import React from 'react';

const AddItem = ({ name, handleAdd, handleChange, hadleRemove }) => (
    <div>
      <input type='text' onChange={handleChange} value={name} placeholder="name..." />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
)

export default AddItem;