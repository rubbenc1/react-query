import React, {useState} from 'react';
import './App.css';
import Search from "./components/Search";
import useDelayedRequest from "./common/hooks/useDelayedRequest";
import {PostsList} from "./pages/PostsList";
import {Loading} from "./components/Loading";
import {usePosts} from "./common/hooks/usePosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import DeletePosts from "./pages/DeletePosts";


const App = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const query = useDelayedRequest(searchQuery, 500)

    const {data, isLoading, isError} = usePosts(query);
    return (
        <>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {isLoading ? (
                <Loading/>
            ) : (isError ? (
                <p>Error fetching data</p>
            ) : (
                <PostsList data={data}/>
            ))}
            <CreatePost/>
            <EditPost/>
            <DeletePosts/>
        </>
    )
}
export default App;

