import React from 'react';
import './SearchBox.css';
import getMovies from '../../api/getMovies';
import { useState } from 'react';


const SearchBox=({addMovies})=>{

    const [search,setSearch]=useState({
        searchLine:""
    })
    
    const searchLineChangeHandler = (event) => {
       setSearch({ searchLine: event.target.value });
    }

    const searchBoxSubmitHandler = (event) => {
        event.preventDefault();        
        getMovies(search.searchLine).then(data=>{
            if(data.Search){
                addMovies(data.Search)
            }else{
                addMovies([]);
            }  
        })
    }     

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Movies Search:
                        <input
                            value={search.searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Titanic, Shawshank, Fast"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!search.searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
 
export default SearchBox;