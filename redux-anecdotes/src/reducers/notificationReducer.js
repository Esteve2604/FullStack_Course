import { createSlice } from '@reduxjs/toolkit'
const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        showAnecdote(state, action){
            return action.payload
        }
    }
})
export const { showAnecdote } = notificationSlice.actions
export const setNotification = (content, time) => {
    return dispatch => {
        dispatch(showAnecdote(content))
        setTimeout(()=>dispatch(showAnecdote('')),time*1000)
    }
}
export default notificationSlice.reducer