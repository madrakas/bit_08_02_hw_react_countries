import { Country } from '../country/Country';
import style from './Region.module.css';

export function Region({title, countries}){
    // console.log(countries);
    return(
        <div className={style.region}>
            <h2>{title}</h2>
            <div className={style.countryList}>
                {countries.map((country, idx) => (
                    <Country key={idx} 
                             name={country.name.official}
                             cmnName={country.name.common} 
                             flag={country.flags.png} 
                             languages={country.languages} 
                             capital={country.capital}
                             currencies={country.currencies}
                             map={country.maps.googleMaps}
                             capitalCoordinates={country.capitalInfo.latlng} />
                ))}
            </div>
        </div>
    );
}