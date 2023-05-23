import { Filter } from './resources/Filter.js';
import { useEffect, useState } from 'react';
import { Displayer } from './resources/Displayer.js';
import axios from "axios";

function App() {

  const [countryFilter, setCountryFilter] = useState('')

  const [countries, setCountries] = useState([])

  useEffect( ()=> {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => setCountries(response.data))
    }
    ,[])

  return (
    <>
      <Filter setCountryFilter = {setCountryFilter} countryFilter = {countryFilter} countries = {countries}></Filter>
      <Displayer countries = {countries} filter = {countryFilter}></Displayer>
    </>
  )
}

export default App;
