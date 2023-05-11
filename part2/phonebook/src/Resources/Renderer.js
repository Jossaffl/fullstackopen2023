import axios from "axios"

import { DeleteEntry } from "../Services/Persons"

const Renderer = ({phoneBook, filterValue, setStateBook, notificationUpdate}) => {

    const filteredNames = phoneBook.filter( e => {

        const filterArr = filterValue.name.toLowerCase().split('')

        return filterArr.every(letter => {
            return e.name.toLowerCase().split('').includes(letter)
        })
         
    })

    if (filterValue.name !== ""){
        return (
           <>
            {filteredNames.map( person => 
                <p key = {person.name}> {person.name}  {person.number} </p>
                )}
           </>
        )
    }

    return (
        <>
            {phoneBook.map(person => 
            <p key = {person.name}> {person.name} {person.number} <DeleteEntry entry = {person.id} state = {phoneBook} setState={setStateBook} notificationState={notificationUpdate} name = {person.name}></DeleteEntry> </p>
                )}
        </>
    )
}

export {Renderer}