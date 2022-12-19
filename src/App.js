import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './list';
import AddItem from './addItem';
import './App.css'
import WelcomeDialog from './welcomeDialog';
import SplitPane from './splitPane';

const initialList = [
  {
    id: 'a',
    name: 'Robin',
    isActive: false,
  },
  {
    id: 'b',
    name: 'Dennis',
    isActive: true,
  },
]

const initFamName = [
  {
    id: 1,
    famName: "Croco",
    isComplete: true,
  },
  {
    id: 2,
    famName: "McKinley",
    isComplete: false,
  }
]

function App() {

  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');

  const [listFam, setListFam] = useState(initFamName);
  const [famName, setFamName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() })
    setList(newList);
    setName('');
  }

  const handleRemove = (id) => {
    console.log(id);
    const modifiedList = list.filter(
      (item) => item.id !== id
    );
    setList(modifiedList);
  };

  const handleRemoveFam = (id) => {
    console.log(id);
    const modifiedList = listFam.filter(
      (item) => item.id !== id
    );
    setListFam(modifiedList);
  };

  const handleToggleAny = (id) => {
    // toggle item's ...
    console.log(id);
    const newList = list.map((item) => { //change 'list'
      if (item.id === id) {
        const updatedItem = {
          ...item,  // how to read this line?? -unpack each item from list...???
          isActive: !item.isActive, // change isActive 2 places
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList); // change setList
  };

  const handleToggleActive = (id) => {
    // toggle item's active status
    console.log(id);
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isActive: !item.isActive,
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList);
  };

  const handleToggleComplete = (id) => {
    // toggle item's complete status
    console.log(id);
    const newList = listFam.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isComplete: !item.isComplete,
        };
        return updatedItem;
      } 
      return item;
    });
    setListFam(newList);
  };

  const handleChangeFamName = (e) => {
    setFamName(e.target.value);
  }

  const handleAddFamName = () => { 
    const newListFam = listFam.concat({ famName, id: uuidv4() });
    setListFam(newListFam);
    setFamName('')
  }

  return (
    
    <div>
      <SplitPane 
        right={
          <>
            <WelcomeDialog />
            <p className='Contacts'>test</p>
          </>
        }
        left={
          <h2 className='Chat'>This is left side of the screen</h2>
        }
      />
      
      <br />
      {/* the same but with smaller components and props for 2nd and 3rd */}
      <AddItem 
        name={name}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <List 
        list={list} 
        onRemove={handleRemove} 
        handleToggle={handleToggleActive}
      />

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
          <Fragment key={item.id}>
            <li>
              <span 
                style={{
                  textDecoration: item.isComplete ? 'line-through' : 'none',
                }}
              >
                {item.famName} <span> </span>
              </span>
              <button 
                type="button" 
                onClick={() => {handleToggleComplete(item.id)}}
              >
                {item.isComplete ? 'Done' : 'Undo'}
              </button>
              <button 
                type="button" 
                onClick={() => {handleRemoveFam(item.id)}}
              >
                Remove Family Name
              </button>
            </li>
            <br />
          </Fragment>
        ))}
      </ol>
    </div>
  );
};

export default App;