
const InfoPais = (props) => {
    const idiomas=Object.values(props.paises.languages)
    return (
        <>
            <h1>{props.paises.name.common}</h1>
            <p> capital {props.paises.capital[0]} <br></br>
                population {props.paises.population}
            </p>
            <h3>languages</h3>
            <ul>
                {idiomas.map(idioma=> <li key={idioma}>{idioma}</li>)}
            </ul>
            <img src={props.paises.flags.png}></img>
        </>

    )
}
export default InfoPais