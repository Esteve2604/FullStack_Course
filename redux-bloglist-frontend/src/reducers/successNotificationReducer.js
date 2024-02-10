import {createSlice} from '@reduxjs/toolkit'
const notificationSlice = createSlice({
    name: 'Snotification',
    initialState: null,
    reducers: {
        showSNotification(state, action){
            return action.payload
        }
    }
})
export const {showSNotification} = notificationSlice.actions
export const setSuccessNotification = (content) => {
    return dispatch => {
        dispatch(showSNotification(content))
        setTimeout(()=>dispatch(showSNotification(null)),5000)
    }

}
export default notificationSlice.reducer