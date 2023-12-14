
interface UpdatedData {
    title: string;
    body: string;
}
const editRequest = async (id: number, updatedData: UpdatedData) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            throw new Error('Failed to edit resource');
        }
        return response.json();
    }catch(error){
        console.error('Error editing resource: ', error)
        throw error;
    }


}

export default editRequest;