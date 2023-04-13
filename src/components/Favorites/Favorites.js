import React, { useState } from 'react';
import './Favorites.css';
import CustomBtn from '../CustomButton/customButton';
import createList from '../../api/createList';


const Favorites = ({ favoriteMovies, delFavorites }) => {

    const [nameTitle, setNameTitle] = useState("New List");
    const [listId, setListId] = useState('');
    const [creatingList, setCreatingList] = useState(false);

    const createListHandler = () => {
        setCreatingList(true)
        createList(nameTitle, favoriteMovies)
            .then(data => {
                setListId(data.id)
            })
            .catch(err => {
                console.log("err:", err)
            })
    }
    console.log("idddd:", listId)

    const btnDisabled = Boolean(
        nameTitle?.trim() === "" ||
        favoriteMovies.length === 0 ||
        creatingList
    )

    return (
        <div className="favorites">
            <input disabled={creatingList} value={nameTitle} className="favorites__name" onChange={(e) => setNameTitle(e.target.value)} />
            <ul className="favorites__list">
                {favoriteMovies.map((item) => {
                    return <li key={item.id} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBlock: "10px"
                    }}>
                        {item.Title}
                        ({item.Year})
                        <button type='button'
                            className='delete'
                            onClick={() => delFavorites(item.imdbID)}
                            disabled={creatingList}
                        >X</button>
                    </li>;
                })}
            </ul>
            {listId ?
                <CustomBtn
                    type="link"
                    to={"/list/" + listId}
                />
                : 
                <CustomBtn
                    type="button"
                    btnDisabled={btnDisabled}
                    createListHandler={createListHandler}
                    title={creatingList ? "Loading" : "Save list"}
                />
            }
        </div>
    )

}

export default Favorites;