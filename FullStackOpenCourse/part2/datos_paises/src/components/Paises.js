import axios from 'axios'
import { useEffect } from 'react';
import InfoPais from './InfoPais';
const Paises = ({ paises, setPaises, search, setSearch}) => {
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${search}`).then(response => { setPaises(response.data) })
    }, [search])
    if (paises.length > 11) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (paises.length === 1){
        return <InfoPais paises={paises[0]}/>
    }
    return (
        <div>
            {paises.map(pais => (<div key={pais.name.common}>
            <pre> {pais.name.common} <button onClick={() => setSearch(pais.name.common)}>show</button></pre>
            </div>))}
        </div>
    )
}
export default Paises