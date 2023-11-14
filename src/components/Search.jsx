import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';

function Search ({onFilter}) {
    const [volunteerFilter, setVolunteerFilter] = useState('')

    const inputHandler = (e) => {
        setVolunteerFilter(e.target.value);
    }

    const searchHandler = () => {
        onFilter(volunteerFilter);
    }
    
    return (
        <>  <div className="search-moodle">
            <input  className=" col-1 input-group-text input-search" value={volunteerFilter} onChange={inputHandler} placeholder="Search..."></input>
            <button  type="search" className=" btn btn-primary form-control" onClick={searchHandler}>Search</button>
            </div>
        </>
    )
}

export default Search;

