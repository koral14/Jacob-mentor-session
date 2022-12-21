import React, { useState, useEffect } from 'react';
// import JokeCard from './jokeCard';

const loadJokes = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  return data;
//   if (data) {
//     return data;
// }
//   return [];
}

function App() {

  const [jokes, setJokes] = useState();
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

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          jokes.map((joke) => <div key={joke.fact}>{joke.fact}</div>)
        )}
        
    </div>
  )
}

export default App;

