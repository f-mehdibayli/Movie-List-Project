import React, { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const MainPage=()=> {

        const [movies,setMovies]=useState({
            list:[],
            favoriteMovies: [],
        })

        const addMovies=(movies)=>{
            setMovies(prevState=>({
                ...prevState,
                list:movies
            })
            )
        }
        
        const addFavorites = (addList) => {
            if(!movies.favoriteMovies.some(item=>item.imdbID === addList.imdbID)){
                setMovies(prevState=>({
                    ...prevState,
                    favoriteMovies: [...prevState.favoriteMovies,addList]
                }));
            }
            
          }
          
        const delFavorites=(id)=>{
            setMovies(prevState=>({
            ...prevState,
            favoriteMovies: prevState.favoriteMovies.filter(item=> item.imdbID !== id)
            }))
            console.log("movies favoriteMovies: ",movies.favoriteMovies)
        }
        console.log("movies favoriteMovies: ",movies.favoriteMovies)

        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox addMovies={addMovies} />
                        </div>
                        <div className="main-page__movies">
                            <Movies  movies={movies.list} addFavorites={addFavorites}/>
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites favoriteMovies={movies.favoriteMovies} delFavorites={delFavorites} />
                    </aside>
                </main>
            </div>
        );
    }
 
export default MainPage;