import React, { useState, useEffect } from 'react';
import LoadPeople from './loadPeople';

function App() {
  // store people and status of fetching people data
  const [peopleData, setPeopleData] = useState({
    people: undefined,
    isLoading: true,
    isErrored: false,
  });
  const [selectedPerson, setSelectedPerson] = useState();
  const { people, isLoading, isErrored } = peopleData;

  useEffect(() => {
    // if people is undefined or null, call load people to get them from the API
    if (!people) {
      LoadPeople()
      // once the promise is resolved, set people equal to the data response
      .then((data) => 
        setPeopleData({ people: data, isLoading: false, isErrored: false }))
        // if there's an error and it isn't successfully resolved, store that
        .catch((error) => 
          setPeopleData({ people: null, isLoading: false, isErrored: true }));
    }
  }, [people]);

  // console.log(people)

  const handleClick = (name) => {
    const clickedPerson = people.find((person) => person.name === name);
    setSelectedPerson(clickedPerson);
  };
  // console.log('selected person', selectedPerson);
  // console.log('people', people);
  // if people is not loading or errored, iterate trough and display the individual's names

  return (
    <div className='App'>
      <header className='App-header'>
        {isLoading ? (
          <div>Loading...</div>
        ) : isErrored ? (
          <div>EROR!</div>
        ) : (
          people.map((person) => (
            <button 
              key={person.name} 
              onClick={(event) =>handleClick(event.target.value)} 
              value={person.name}
            >
              {person.name}
            </button>
          ))
        )}
        {selectedPerson && (
          <div>{`${selectedPerson.name}'s Mass: ${selectedPerson.mass}`}</div>
        )}
      </header>
    </div>
  );
}

export default App;