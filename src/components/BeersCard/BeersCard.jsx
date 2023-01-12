import React from 'react'
import './BeersCard.scss'

const BeersCard = (props) => {

    const {img, name, ph, abv, firstBrewed } = props

    return (
            <div className="beers_card">
                <img src={img} className="beers_card_img" alt="" />
                <h3 className="beers_card_title">{name}</h3>
                <p>Brewed in: {firstBrewed}</p>
                <h5>Ph: {ph}</h5>
                <h5>Abv: {abv}</h5>
            </div>
    )
}

export default BeersCard