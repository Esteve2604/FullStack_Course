const Searching = ({search, setSearch}) => {
    const handleNewSearch = (event) => {
        setSearch(event.target.value)
    }
    return ( 
    <div>
       find countries: <input value={search} onChange={handleNewSearch} />
    </div>
    )
}
export default Searching