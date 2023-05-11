import axios from "axios";

const dataURL = 'http://localhost:3001/persons'

const getAll = () => { 
    const server = axios.get(dataURL)
    return {
        server
    }
}

const createNew =  (NewObject, state, setState, setNotification, name)  => {

    const postRequest = axios
            .post(dataURL, NewObject)
            .then( element => setState(state.concat(element.data)),
            setNotification(`${name} added`),
            setTimeout(() => setNotification(''), 3000)
            )
    return {
        postRequest
    }
}

const DeleteEntry = ({entry, state, setState, notificationState, name}) => {

    const deleteMethod = () => {
        if (window.confirm('Are you sure to want to delete this entry from the phonebook?')){
            axios
            .delete(`http://localhost:3001/persons/${entry}`)
            .then(() => setState(state.filter(e => e.id !== entry)))
            .catch(() => {
                notificationState(`${name}'s data no longer exists`)
                setTimeout(() => notificationState(''), 3000)
            })
        }
    }
   
    return (
        <>
            <button onClick={deleteMethod} > delete </button>
        </>
    )
}

const ModifyEntry = (entry, modifiedEntry, state, setState, notificationState, name) => {

    const modifier = axios
    .put(`http://localhost:3001/persons/${entry}`, modifiedEntry)
    .then(()=> {
        setState(state.filter(e => e.id !== entry).concat(modifiedEntry))
        notificationState(`${name} has been updated`)
        setTimeout(() => notificationState(''), 3000)})
    .catch(() => {
        notificationState(`${name}'s data no longer exists`)
        setTimeout(() => notificationState(''), 3000)
    })
    
    return {
        modifier
    }
}
 

export {getAll, createNew, DeleteEntry, ModifyEntry}