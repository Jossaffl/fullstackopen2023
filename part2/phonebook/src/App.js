import { useEffect, useState } from 'react'

import { NameForm } from './Resources/Form'

import { Filter } from './Resources/Filter'

import { Renderer } from './Resources/Renderer'

import { Notification } from './Resources/Notification'

import  axios  from 'axios'


const App = () => {

  const [phoneBook, setPhonebook] = useState([]) 

  const [newPerson, setNewPerson] = useState({name: "", number: ""})

  const [filterValue, setFilterValue] = useState({name: ""})

  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(()=> {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then( response => {
      console.log('promise fulfilled')
      setPhonebook(response.data)
    })
  }, [])

  return (

    <div>

      <h2>Phonebook</h2>

      <Filter filterValue={filterValue} filterState={setFilterValue}> </Filter>

      <Notification notification= {notificationMessage}> </Notification>

      <NameForm 
      
      newValue = {newPerson} newValueState = {setNewPerson} personState = {phoneBook} setPersonState = {setPhonebook} setNotification={setNotificationMessage}>

      </NameForm>

      <h2>Numbers</h2>
      
      <Renderer phoneBook ={phoneBook} filterValue= {filterValue} setStateBook={setPhonebook} notificationUpdate={setNotificationMessage}></Renderer>
      ...

    </div>
  )
}

export default App