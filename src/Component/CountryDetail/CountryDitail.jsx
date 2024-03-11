
import CountryData from "./CountryData/CountryData";
const CountryDetail = (props) => {
    // const {country, handaleVisitedCountry, handaleVisitedFlags} = props

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData 
                country={country}
                handaleVisitedCountry={handaleVisitedCountry}
                handaleVisitedFlags={handaleVisitedFlags}
            /> */}
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetail;

 

