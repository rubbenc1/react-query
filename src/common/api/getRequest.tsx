
const fetchSearchResults = async (query: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?query=${query}`);
    return response.json();
};

export default fetchSearchResults;