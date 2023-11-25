import { FaLocationDot, FaWikipediaW  } from "react-icons/fa6";
import style from './Country.module.css';
export function Country({name, flag, cmnName, capital, languages, currencies, map, capitalCoordinates}){
          
    const langs = [];
    const currs=[];
    let langList ='';
    let currList='';

    for (const lng in languages){
        langs.push(languages[lng]);
    }

    for (const curr in currencies){
        currs.push(currencies[curr].name);
    }
    if (currs.length > 0){
        currList = currs.join(', ');
    }

    if (langs.length > 0){
        langList = langs.join(', ');
    }
    
    let capLink='';
    if (capitalCoordinates === undefined){
        console.log('Nėra');
    }else{
        console.log(capitalCoordinates.length);
        capLink = 'https://www.google.com/maps/place/' + capitalCoordinates.join(', ');
    }
        
    
    return(
        <div className={style.country}>
            <div className={style.flagContainer}>
                <img className={style.flag} src={flag} alt="flag"/>
            </div>
            <div className={style.details}>
                <div className={style.title}>{name}</div>
                <div className={style.description}>
                    <p>Common name: <i>{cmnName}</i>.</p>
                    <p>Capital: <a href={capLink} target="_blank" rel="noreferrer"><i>{capital}</i></a>.</p>
                    <p>Languages: <i>{langList}</i>.</p>
                    <p>Currencies: <i>{currList}</i>.</p>
                    <p><a href={map} target='_blank' rel='noreferrer'>{<FaLocationDot />}</a>
                       <a href={'https://wikipedia.org/wiki/'+ name.replace('_', ' ')} target='_blank' rel='noreferrer'>{<FaWikipediaW />}</a>
                       {/* {capLink} */}
                    </p>
                    
                </div>
            </div>
        </div>
    );
}