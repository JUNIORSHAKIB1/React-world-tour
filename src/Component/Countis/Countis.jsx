import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './Countries.css'


const Countis = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([])
    const [visitedFlags, steVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    const handaleVisitedCountry = country => {
        console.log('add this to your  visited country');
         const newVisitedCountries = [...visitedCountries, country];
         setvisitedCountries(newVisitedCountries);
    }


    const handaleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        steVisitedFlags(newVisitedFlags)
    }

    //remove item from an array in a state
    // use this 

    return (
        
        <div>
            <h3>hello react: {countries.length}</h3>

            <div>
                <h3>Visited countries {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container ">
                    {
                        visitedFlags.map(flag => <img src= {flag}></img>)
                    }
            </div>

            <div className="country-container">
            {
                countries.map(country => 
                <Country key={country.cca3}
                handaleVisitedCountry = {handaleVisitedCountry}
                handaleVisitedFlags = {handaleVisitedFlags}
                 country = {country} ></Country> )
            }
            </div>
        </div>
    );
};

export default Countis;