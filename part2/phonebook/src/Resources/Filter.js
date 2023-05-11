const Filter = ({filterValue, filterState}) => {

    const handleFilterValue = (e) => {

        filterState({name: e.target.value})
    }


    return (
        <>
            <form>
               Filter by name <input value = {filterValue.name} onChange={handleFilterValue}></input>
            </form>
        </>
    )
}

export {Filter}