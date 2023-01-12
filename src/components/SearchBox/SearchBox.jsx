import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

    const {searchTerm, setSearchTerm} = props

    //function sets the searchTerm variable to updated value in searchbar
    const handleInput = event => {
        const selectCondition = event.target.value.toLowerCase();
        setSearchTerm(selectCondition)
    }

    return (
        <div className="searchBox">
            <input type="text" value={searchTerm} onChange={handleInput} placeholder="Search beer here..."/>
        </div>
    )
}

export default SearchBox
