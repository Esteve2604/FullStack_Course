import FilterbyName from "./FilterbyName"
import personsService from '../services/persons'
const Agenda = ({ agenda, filter, setPersons}) => {
    const borrarPerson = (person) => () => {
        if (window.confirm(`Seguro que quieres eliminar a ${person.name}`))
            personsService.borrar(person).then( () => {
                return setPersons(agenda.filter(personas => personas.id != person.id))
            })
    }
    if (filter.localeCompare('') != 0) {
        return (<>
            <FilterbyName agenda={agenda} filter={filter} />
        </>)
    }
    return (<>
        {agenda.map(nombre => (<pre key={nombre.name}> {nombre.name} {nombre.number}
            <button onClick={borrarPerson(nombre)}>borrar</button></pre>))}
    </>)
}
export default Agenda