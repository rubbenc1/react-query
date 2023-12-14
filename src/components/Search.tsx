import React, {FC} from "react";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import DeletePosts from "../pages/DeletePosts";

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (v: string) => void;
}

const Search: FC<SearchProps> = ({searchQuery, setSearchQuery}) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = e.target.value;
        setSearchQuery(inputElement);

        // Reset data to null when the input is empty
        if (inputElement.trim() === '') {
            setSearchQuery('');
        }
    };

    return (
        <div>
            <div className='common-container'>
                <div>
                    <label className='search-label'>
                        Searching for:
                        <input type='text' name='searchInput' value={searchQuery} onChange={handleSearch}/>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Search;