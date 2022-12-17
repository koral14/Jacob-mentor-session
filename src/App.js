import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
]

const initFamName = [
  {
    id: 1,
    famName: "Gorkii",
  },
  {
    id: 2,
    famName: "Zombi",
  }
]

// 3rd version of adding using useReducer:
const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat({ name: action.name, id: action.id });
    default:
      throw new Error();
  }
};

function App() {
  const [list, dispatchList] = useReducer(listReducer, initialList);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleAdd = () => {
    dispatchList({ type: 'ADD_ITEM', name, id: uuidv4() });
    setName('');
  }

  // const [list, setList] = useState(initialList);
  // const [name, setName] = useState('');

  const [listFam, setListFam] = useState(initFamName);
  const [famName, setFamName] = useState('');

  // const handleChange = (e) => {
  //   // track input field's state
  //   setName(e.target.value);
  // }
  
  // const handleAdd = () => {
  //   // add item: const array3 = array1.concat(array2); 
  //   // object shorthand initialization- variable's name equals the object's property name { name }; how to write it differently if not using shorthand...?
  //   const newList = list.concat({ name, id: uuidv4() });
  //   setList(newList);
  //   setName('')
  // }

  const handleChangeFamName = (e) => {
    setFamName(e.target.value);
  }

  const handleAddFamName = () => {
    // const newListFam = listFam.concat({ listFam, id: uuidv4() });
    // setListFam(newListFam);
    // setFamName('');    
    const newListFam = listFam.concat({ famName, id: uuidv4() });
    setListFam(newListFam);
    setFamName('')
  }

  return (
    <div>
      {/* the same but with smaller components and props for 2nd and 3rd */}
      <AddItem 
        name={name}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <List list={list} />
      
      <hr />
      {/* the same but with all code in return statement */}
      <div>
        <input type="text" onChange={handleChangeFamName} value={famName} placeholder='Family name...'  />
        <button type="button" onClick={handleAddFamName}>
          Add Family Name
        </button>
      </div>

      <hr />
      <ol>
        {listFam.map((item) => (
          <li key={item.id}>{item.famName}</li>
        ))}
      </ol>
    </div>
  );
};

const AddItem = ({ name, handleAdd, handleChange }) => (
  <div>
    <input type='text' onChange={handleChange} value={name} placeholder="name..." />
    <button type="button" onClick={handleAdd}>
      Add
    </button>
    </div>
)

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)

export default App;