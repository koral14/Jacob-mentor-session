import { useState, useEffect } from "react";
import "./App.css";

const loadPeople = async () => {
  const response = await fetch(`https://swapi.dev/api/people`, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  // return data; // returnes {fact: 'In 1987 cats overtook dogs as the number one pet in America.', length: 60}...
  if (data) {
    return data;
  }
  return [];
};

function App() {
  // Store people and status of fetching people data
  const [people, setPeople] = useState();
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // If people is undefined or null, call load people to get them from the API
    if (!people) {
      loadPeople()
        // Once the promise is resolved, set people equal to the data response
        .then((data) => setPeople(data))
        .then(() => setIsLoading(false))
        // If there's an error and it isn't successfully resolved, store that
        .catch((error) => console.log(error.message));
    }
  }, [people]);

  // console.log(people);
  // If people is not loading or errored, iterate through and display the individual's names
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          people.map((person) => <div key={person.name}>{person.name}</div>)
        )}
      </header>
    </div>
  );
}
// export default App;