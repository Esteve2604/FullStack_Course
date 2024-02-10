const Filter = ({newFilter, setNewFilter }) => {
    const handleNewFilter = (event) => {
        setNewFilter(event.target.value)
    }
    return (
        <div>
            Fiter shown with: <input value={newFilter} onChange={handleNewFilter} />
        </div>
    )
}
export default Filter