const Renderer = ({phoneBook, filterValue}) => {

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
                <p key = {person.name}> {person.name}  {person.number}</p>
                )}
           </>
        )
    }

    return (
        <>
            {phoneBook.map(person => 
            <p key = {person.name}>{person.name} {person.number}</p>
                )}
        </>
    )
}

export {Renderer}