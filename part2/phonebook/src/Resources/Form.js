import axios from "axios"

import { getAll, createNew, ModifyEntry } from "../Services/Persons"


const NameForm = ({newValue, newValueState, personState, setPersonState, setNotification}) => { 

    const NewForm = (e) => {
      e.preventDefault()

      const {name, number} = newValue
      const directoryObject = { name: name, number: number }

      if(personState.some(person => Object.values(person).includes(name))){

        const toModify = personState.filter(e => e.name === name)

        if (window.confirm(`Are you sure to want to update the number for ${name}`)){
          ModifyEntry(toModify[0].id, directoryObject, personState, setPersonState, setNotification, name)
          newValueState( {name: "", number: ""})
        }
        
      }

      else {
        createNew(directoryObject, personState, setPersonState, setNotification, name)
        newValueState( {name: "", number: ""})
      }
    }
  


  const handleNewName = (e) => {
    console.log(e.target.value)
    newValueState({
      ...newValue,
      name: e.target.value
    })
  }

  const handleNewNumber = (e) => {
    console.log(e.target.value)
    newValueState({
      ...newValue,
      number: e.target.value
    })
  }

    return (
      <>
        <form onSubmit={NewForm}>

          <h1>Add new entry</h1>
  
          Name: <input value = {newValue.name} onChange = {handleNewName}></input>
          
          Number: <input value = {newValue.number} onChange={handleNewNumber}></input>
  
          <button type = "submit"> Add </button>
  
        </form>
      </>
    )
  }

export {NameForm}