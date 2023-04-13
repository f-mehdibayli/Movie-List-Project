import React from "react";
import { Link } from "react-router-dom";

const CustomBtn = ({ createListHandler, type, btnDisabled,to,title}) => {

    if (type === "button") {
        return (
            <button
                type="button"
                className={`favorites__save ${btnDisabled ? "btnDisabled" : ""}`}
                disabled={btnDisabled}
                onClick={createListHandler}
            >
            {title}
            </button>
        )
    }
    return(
        <Link to={to} target="_blank" rel='noreferrer'>Go to list</Link>
    )

}

export default CustomBtn;