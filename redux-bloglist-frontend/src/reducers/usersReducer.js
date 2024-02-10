import { createSlice } from '@reduxjs/toolkit'
import usersServices from '../services/users'
const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers(state, action) {
            return action.payload
        }
    }
})
export const { setUsers } = usersSlice.actions
export const initializeUsers = () => {
    return async dispatch => {
        const users=await usersServices.getAll()
        dispatch(setUsers(users))
    }
}
export default usersSlice.reducer