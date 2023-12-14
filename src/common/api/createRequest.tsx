
interface User {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const createNewPost = async (newPostData: {title: string; body: string}): Promise<User> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPostData)
    });
    return response.json();
}

export default createNewPost;