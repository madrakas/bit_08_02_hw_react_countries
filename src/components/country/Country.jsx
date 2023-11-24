import style from './Country.module.css';
export function Country({name, flag}){
    return(
        <div className={style.country}>
            <div className={style.flagContainer}>
                <img className={style.flag} src={flag} alt="flag"/>
            </div>
            <div className={style.details}>
                <div className={style.title}>{name}</div>
                <div className={style.description}>dsalk fsdalk;f sad fdjsfkkjsdf</div>
            </div>
        </div>
    );
}