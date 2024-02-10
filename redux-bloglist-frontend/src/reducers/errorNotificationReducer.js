import { createSlice } from '@reduxjs/toolkit'
const notificationSlice = createSlice({
    name: 'Enotification',
    initialState: null,
    reducers: {
        showENotification(state, action){
            return action.payload
        }
    }
})
export const {showENotification} = notificationSlice.actions
export const setErrorNotification = (content) => {
    return dispatch => {
        dispatch(showENotification(content))
        setTimeout(()=>dispatch(showENotification(null)),5000)
    }

}
export default notificationSlice.reducer