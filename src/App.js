import React, { useState, useEffect } from 'react';

const useEffectNoInitialization = (callback, dependencyArray) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (initialized) {
      callback()
    } else {
      setInitialized(true)
    }
  }, dependencyArray)
}

function App() {

  const [option, setOption] = useState('');
  useEffectNoInitialization(() => {
    console.log('option', option);
  }, [option]);
  const handleOptionChange = (event) => {
    setOption(event.target.value)
  }


  return (
    <>
      <select onChange={handleOptionChange} value="Select option:">
        <option>Select option:</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <hr />
      <select onChange={handleOptionChange} value="Select:">
        <option>Select:</option>
        <option>Cake</option>
        <option>Drink</option>
        <option>Soup</option>
      </select>
      
    </>
  );
}

export default App;