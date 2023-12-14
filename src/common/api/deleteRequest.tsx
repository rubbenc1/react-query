

const deleteRequest = async (id: number)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE',
    });
}

export default deleteRequest;