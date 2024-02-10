import personsService from '../services/persons'
const PersonForm = ({ newName, setNewName, newPhone,
    setNewPhone, persons, setPersons, setSuccessMessage, setErrorMessage }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }
    const succeded = (person) => {
        setSuccessMessage(person.name)
        setTimeout(() => setSuccessMessage(null), 5000)
    }
    const error = (name) => {
        setErrorMessage(name)
        setTimeout(() => setErrorMessage(null), 5000)
    }
    const addPerson = (event) => {
        event.preventDefault()
        if (AddedPerson()) {
            const person = { name: newName, number: newPhone }
            personsService.add(person).then(person => setPersons(persons.concat(person)))
            succeded(person)
        } else {
            if (window.confirm(`${newName} is already added to phonebook, do you want to update the phone number?`))
                personsService.actualizar(persons, newName, newPhone).then(
                    returnedper => {
                        succeded(returnedper)
                        return setPersons(persons.map(persona => returnedper.id === persona.id ? returnedper : persona))
                    }).catch(errores=> error(newName)
                    )

        }
    }
    const AddedPerson = () => {
        const nom = persons.filter(nombre => newName.localeCompare(nombre.name) === 0)
        return nom.length === 0
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                Number: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm