import React, {useState} from "react";
import {useMutation} from "react-query";
import createRequest from "../common/api/createRequest";


const CreatePosts = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')


    const createPostMutation = useMutation(createRequest, {
        onSuccess: (newPost) =>{
            console.log('New post created:', newPost)
        }
    })
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    };
    const handleBody = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setBody(e.target.value)
    }
    const handleCreatePost = () =>{
        createPostMutation.mutate({title: title, body: body});
    };
    return (
        <>
            <div className='create-container'>
                <label>Creating a new post: </label>
                <label>
                    Title:
                    <input type = 'text' value ={title} onChange={handleTitle}/>
                </label>
                <label>
                    Body:
                    <input type = 'text' value={body} onChange={handleBody}/>
                </label>
                <button onClick={handleCreatePost}>Create New Post</button>
                {createPostMutation.isLoading && <p>Creating new post...</p>}
                {createPostMutation.isError && <p>Error creating new post</p>}
            </div>
        </>
    )
}

export default CreatePosts;