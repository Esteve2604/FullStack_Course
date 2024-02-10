import React, { useEffect, useState } from 'react'
import Agenda from './components/Agenda'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    personsService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])
  return (
    <div>
      <Notification.successNotification successMessage={successMessage} />
      <Notification.errorNotification errorMessage={errorMessage} />
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a New</h2>
      <PersonForm newName={newName} setNewName={setNewName} newPhone={newPhone}
        setNewPhone={setNewPhone} persons={persons} setPersons={setPersons}
        setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <Agenda agenda={persons} setPersons={setPersons} filter={newFilter} />
    </div>
  )
}

export default App
