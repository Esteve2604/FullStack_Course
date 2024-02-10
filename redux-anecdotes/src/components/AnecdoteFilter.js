import {changeFilter} from "../reducers/filterReducer"
import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
    const dispatch=useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        const filterName=event.target.value
        dispatch(changeFilter(filterName))
    }
    const style = {
        marginBottom: 10
    }
    return <div style={style}>
        filter <input onChange={handleChange} />
    </div>
}
export default AnecdoteFilter