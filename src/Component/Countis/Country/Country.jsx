import { useState } from 'react';
import './Country.css'
import CountryDitail from '../../CountryDetail/CountryDitail';

const Country = ({country, handaleVisitedCountry, handaleVisitedFlags}) => {
    console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [Visited, setvisited] = useState(false);

    const handleVisited = () =>{
        setvisited(!Visited);
    }
    const passwithParam =() => handaleVisitedCountry(country);

    return (
        <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: Visited ? 'red' : 'rgb(23, 0, 227)'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={passwithParam}>Mark visited</button><br />
            <button onClick={()=> handaleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{Visited ? 'visited' : 'Going'}</button>
            {Visited ? 'I have visited this country.' : 'i have visited '}
            <hr />
           <CountryDitail 
            country={country}
            handaleVisitedCountry={handaleVisitedCountry}
            handaleVisitedFlags={handaleVisitedFlags}>
           </CountryDitail>
        </div>
    );
};

export default Country;