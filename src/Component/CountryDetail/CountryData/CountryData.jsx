

const CountryData = ({country, handaleVisitedCountry, handaleVisitedFlags}) => {

    console.log(country, handaleVisitedCountry, handaleVisitedFlags)
    return (
        <div>
            <p><small>Country Data : {country.name.common} </small></p>
        </div>
    );
};

export default CountryData;