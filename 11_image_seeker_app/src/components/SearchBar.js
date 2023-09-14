import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [serachTerm, setSearchTerm] = useState('');
    
    const handleFormSubmit = (event) => {
        //disabling default behaviour - like form submitting
        event.preventDefault(); 

        onSubmit(serachTerm);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <lable for="searchText">Enter Search Term</lable>
                <br />
                <input 
                    name="searchText"
                    id="searchText"
                    value={serachTerm}
                    onChange={handleChange}
                    // or
                    // onChange={e => setSearchTerm(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;