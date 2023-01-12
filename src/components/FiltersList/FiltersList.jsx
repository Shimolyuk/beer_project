import React from 'react'
import './FiltersList.scss'

const FiltersList = (props) => {

    const  {filterAbv, filterPh, filterBrewed} = props
    

    return (
        <div className="filters">
            <p>Filter Beers by:</p>
            <div className="filtersList">
                <div className="checkboxes">
                    <input onClick={filterAbv} type="checkbox" />
                    <label>High Alcohol (ABV value greater than 6%)</label>
                </div>
                <div className="checkboxes">
                    <input onClick={filterPh} type="checkbox" />
                    <label>High Acidity (pH lower than 4)</label>
                </div>
                <div className="checkboxes">
                    <input onClick={filterBrewed} type="checkbox" />
                    <label>Was first brewed before 2010</label>
                </div>
            </div>
        </div>
    )
}

export default FiltersList
