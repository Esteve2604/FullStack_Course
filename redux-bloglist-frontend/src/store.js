import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './reducers/blogsReducer'
import errorNotificationReducer from './reducers/errorNotificationReducer'
import successNotificationReducer from './reducers/successNotificationReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
const store = configureStore({
  reducer: {
    Snotification: successNotificationReducer,
    Enotification: errorNotificationReducer,
    blogs: blogsReducer,
    user: userReducer,
    users: usersReducer
  }
})
export default store