import React, { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import FiltersList from './components/FiltersList/FiltersList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

    // take in an array of beers from API and 
    //store them in the useState variable
    const [beers, setBeers] = useState([]) 
    
    //variable holds value from searchbox input
    const [searchTerm, setSearchTerm] = useState('') 
    
    //state variables to store changes when the beer is checked in checkbox
    const [isClassic, setIsClassic] = useState(false) 
    const [ph, setPh] = useState(false) 
    const [abv, setAbv] = useState(false) 
    
    
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')  
       
        .then(response => response.json())
      
        .then(data => {
            setBeers(data)
        })
    }, []) //Runs ONCE after initial rendering/onMounting

    //functions that change boolean values to true when checkboxes checked
    const filterAbv = () => {
        setAbv(!abv)
    }

    const filterPh = () => {
        setPh(!ph)
    }

    const filterBrewed = () => {
        setIsClassic(!isClassic)
    }

    //function to filter the beers array
    const filterResults = beers.filter(result => {
    
        let beerFiltered = true;
      
        if (searchTerm) {
            beerFiltered = result.name.toLowerCase().includes(searchTerm);
        }
      
        if (abv) {
            beerFiltered = beerFiltered && result.abv > 6;
        }
      
        if (ph) {
            beerFiltered = beerFiltered && result.ph < 4;
        }

        if (isClassic) {
            beerFiltered = beerFiltered && result.first_brewed.slice(-4) < 2010;
        }
      
        return beerFiltered;
      });

  return (
   
        <div className="App">
                    <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                    <FiltersList filterAbv={filterAbv} filterPh={filterPh} filterBrewed={filterBrewed}/>
                    <BeersList beers={filterResults} />
        </div>
    
  );
}

export default App;
