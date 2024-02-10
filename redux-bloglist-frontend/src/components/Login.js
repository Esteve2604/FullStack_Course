import loginService from '../services/login'
import FormInput from './FormInput'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import { showENotification } from '../reducers/errorNotificationReducer'
import { setUser } from '../reducers/userReducer'
const Login = ({ username, password, setUsername, setPassword }) => {
    const dispatch = useDispatch()
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password,
            })
            window.localStorage.setItem(
                'loggedBlogappUser', JSON.stringify(user)
            )
            blogService.setToken(user.token)
            dispatch(setUser(user))
            setUsername('')
            setPassword('')
        } catch (exception) {
            setUsername('')
            setPassword('')
            dispatch(showENotification("wrong username or password"))
            console.log('Wrong credentials')
        }
    }
    return (
        <form onSubmit={handleLogin}>
            <FormInput entry={username} setEntry={setUsername} entryName={"username"} />
            <div>
                password
                <input
                    id='password'
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button id='login-button' type="submit">login</button>
        </form>
    )
}
export default Login