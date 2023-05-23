const Filter = ({setCountryFilter, countryFilter, countries}) => {

    const handleFilter = (e) => {
        setCountryFilter(e.target.value)
    } 


    return (
        <>
            <p> find countries: <input value = {countryFilter} onChange = {handleFilter}></input> </p>
            
        </>
    )
}

export {Filter}