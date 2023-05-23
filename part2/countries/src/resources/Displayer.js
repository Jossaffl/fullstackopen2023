const Displayer = ({countries, filter}) => {

    const countryDisplay = countries.filter(e => {
        const filteredArray = filter.toLowerCase().match(/[\s\S]{1,2}/g) || [];
        const countryArray = e.name.common.toLowerCase().match(/[\s\S]{1,2}/g) || [];

        return filteredArray.every(letter => {
            return countryArray.includes(letter)
        })
    })


    if (countryDisplay.length > 10 || filter === '') {
        return (
            <div>
             <p>Too many matches, specify filter</p>
            </div>
        )}

    else if (countryDisplay.length > 2){
        return (
            <div>
                {countryDisplay.map(country=> 
                    <p key={country.name.common}>{country.name.common}</p>
                    )}
            </div>
        )}

    return (
        <div>
             {countryDisplay.map(e=> 
             <>
                    <h1 key={e.name.common}>{e.name.common}</h1>
                    <p>capital {e.capital}</p>
                    <p>area {e.area}</p>
                    <h3>Languages:</h3>
                    <ul>{Object.values(e.languages).map(lang => <li key={lang}> {lang}</li>) } </ul>    
                    <img src={e.flags.png}></img>

            </>    
                    )}
        </div>
    )  
}

export {Displayer}