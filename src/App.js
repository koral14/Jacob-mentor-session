import React, { useState, useEffect } from 'react';
// import JokeCard from './jokeCard';

const loadCatFacts = async () => {
  const response = await fetch('https://catfact.ninja/facts');
  const jsonResponse = await response.json();
  // return data; // return data; // returnes {fact: 'In 1987 cats overtook dogs as the number one pet in America.', length: 60}...
  if (jsonResponse) {
    return jsonResponse.data;
  }
  return [];
}

function App() {

  const [jokes, setJokes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    if (!jokes) {
      loadCatFacts()
        .then((data) => setJokes(data))
        .then(() => setIsLoading(false))
        .then(() => setIsErrored(true))
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
          jokes.map((cat) => <div key={cat.fact}>{cat.fact}</div>)
        )}
        
    </div>
  )
}

export default App;

