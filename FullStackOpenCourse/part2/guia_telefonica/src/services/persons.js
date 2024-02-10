import axios from 'axios'
const base_url = '/api/persons'
const getAll = () => {
    const request = axios.get(base_url)
    return request.then(response => response.data)
}
const add = (person) => {
    const request = axios.post(base_url, person)
    return request.then(response => response.data)
}
const borrar = (person) => {
    const request = axios.delete(`${base_url}/${person.id}`)
    return request.then(response => response.data)
}
const actualizar = (persons, newName, newPhone) => {
    const person = persons.find(persona => newName.localeCompare(persona.name) === 0)
    const changedPer = { ...person, number: newPhone }
    const request = axios.put(`${base_url}/${person.id}`, changedPer)
    return request.then(response => response.data)
}
export default { getAll, add, borrar, actualizar }