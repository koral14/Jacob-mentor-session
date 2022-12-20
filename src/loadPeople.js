
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

export default LoadPeople;