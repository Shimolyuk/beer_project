import React from 'react'
import BeersCard from '../BeersCard/BeersCard'
import './BeersList.scss'

const BeersList = (props) => {

    const {beers} = props

    const beersArray = beers.map(beer => {
        return (
          
                <BeersCard key={beer.id} img={beer.image_url} name={beer.name} firstBrewed={beer.first_brewed} ph={beer.ph} abv={beer.abv} />
           
        ) 
    })

    return (
        <main className="beers_list">
            {beersArray}
        </main>
    )
}

export default BeersList
