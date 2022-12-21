import React, { useState, useEffect } from 'react';
// import JokeCard from './jokeCard';

const loadJokes = async () => {
  const response = await fetch(`https://swapi.dev/api/people`, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (data) {
    return data.results;
}
  return [];
}

const LoadPeople = async() => {
  // get the response
  const response = await fetch(`https://swapi.dev/api/people`, {
      // this tells the API that you want your data in JSON format
      headers: { "Content-Type": "application/json" },
  });
  // pull out your data
  const data = await response.json();
  // if there's data, return the results (where te people are)
  if (data) {
      return data.results;
  }
  // if there's null data, return an empty array
  return [];
};

function App() {

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jokes) {
      loadJokes()
        .then((data) => setJokes(data))
        .then(() => setIsLoading(false))
        .catch((error) => console.log(error.message));
    }
  }, [jokes]);

  console.log(jokes);

  return (
    <div>
      <h1>Hello API</h1>
        {/* {isLoading ? (
          <div>Loading...</div>
        ) : (
          jokes.map((joke) => 
            <div key={joke.id}>{joke.setup}<div/>)
        )} */}
        
    </div>
  )
}

export default App;