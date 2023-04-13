import { getMyList } from '../../api/getMyList';
import './ListPage.css';
import React, { useState, useEffect } from 'react';


const ListPage = (props) => {

    const [myList, setMyList] = useState("")

    const { id } = props.match.params;

    useEffect(() => {
        getMyList(id)
            .then(data => {
                setMyList(data)
            })
    }, [id])

    return (
        <div className="list-page">
            <h1 className="list-page__title"> Movies List </h1>
            <ul>
                {myList ? myList.movies.map((item) => {
                    return (
                        <li key={item.imdbID} >
                            <div>
                                <img className='list-page-img' src={item.Poster} alt={item.Title} />
                            </div>
                            <div>
                                <h1 >{item.Title}&nbsp;({item.Year})</h1>
                                <div>
                                    <a
                                        href={`https://www.imdb.com/title/${item.imdbID}`}
                                        target="_blank"
                                        rel='noreferrer'>
                                        {item.Title} {item.Year}
                                    </a>
                                </div>
                            </div>
                        </li>
                    );
                }) : null}
            </ul>
        </div>
    );
}

export default ListPage;