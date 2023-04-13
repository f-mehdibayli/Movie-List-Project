import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies=({movies,addFavorites})=> {
    
        console.log("movies: ",movies)

        return ( 
            <ul className="movies">
                {movies?.length ? movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem movie={movie} addFavorites={addFavorites}/>
                    </li>
                )): null }
            </ul>
        );
    
}
 
export default Movies;