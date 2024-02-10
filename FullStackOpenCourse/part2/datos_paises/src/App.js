import React, { useEffect, useState } from 'react'
import Searching from './components/Searching'
import Paises from './components/Paises'
function App() {
  const [search, setSearch] = useState('')
  const [paises, setPaises] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  console.log(process.env.REACT_APP_API_KEY)
  console.log(api_key)
  return (
    <>
    <Searching search={search} setSearch={setSearch}/>
    <Paises paises={paises} setPaises={setPaises} search={search} setSearch={setSearch}/>
    </>
  );
}

export default App;