import React, {useEffect, useState} from 'react';
import StateTutorial from './StateTutorials';
import Select from './Select';
import InputField from './inputField';

function App() {
  const [catImg, setCatImg] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then(data => setCatImg(data[0].url))
  }, [catImg])

  return (
    <>
      <h1>Cat Photo</h1>
      <img src={catImg} alt="Kitty" />
    </>
  );
}

export default App;