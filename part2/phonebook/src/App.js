import { useState } from 'react'

import { NameForm } from './Form'

import { Filter } from './Filter'

import { Renderer } from './Renderer'



const App = () => {

  const [phoneBook, setPhonebook] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newPerson, setNewPerson] = useState({name: "", number: ""})

  const [filterValue, setFilterValue] = useState({name: ""})

  return (

    <div>

      <h2>Phonebook</h2>

      <Filter filterValue={filterValue} filterState={setFilterValue}> </Filter>

      <NameForm 
      
      newValue = {newPerson} newValueState = {setNewPerson} personState = {phoneBook} setPersonState = {setPhonebook}>

      </NameForm>

      <h2>Numbers</h2>
      
      <Renderer phoneBook ={phoneBook} filterValue= {filterValue}></Renderer>
      ...

    </div>
  )
}

export default App