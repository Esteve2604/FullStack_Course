import Agenda from "./Agenda";

const FilterbyName = ({agenda, filter}) => {
    const length=filter.length;
    const filtro=filter.toLowerCase()
    const nom = agenda.filter(nombre => filtro.localeCompare(nombre.name.slice(0,length).toLowerCase())===0)
    return (<>
    <Agenda agenda={nom} filter={''}/>
    </>)
} 
export default FilterbyName