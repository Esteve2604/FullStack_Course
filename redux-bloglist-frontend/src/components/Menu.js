import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, Link, useMatch } from 'react-router-dom'
import Blogs from './Blogs'
import Users from './Users'
import User from './User'
import BlogPage from './BlogPage'
import Login from './Login'
import { setUser } from '../reducers/userReducer'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button'
const Menu = () => {
    const padding = {
        paddingRight: 5
    }
    const dispatch = useDispatch()
    const logout = () => () => {
        window.localStorage.removeItem('loggedBlogappUser')
        dispatch(setUser(null))
    }
    const user = useSelector(state => state.user)
    const users = useSelector(state => state.users)
    const blogs = useSelector(state => state.blogs)
    const userMatch = useMatch('/users/:id')
    const userM = userMatch ? users.find(user => user.id === userMatch.params.id) : null
    const blogMatch = useMatch('/blogs/:id')
    const blog = blogMatch ? blogs.find(blog => blog.id === blogMatch.params.id) : null
    /*<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />*/
    return (<>
            <Navbar bg="dark" variant="dark">
                <Container color='#FFFFF'>
                    <Navbar.Brand href="#"><Link to="/" >Blogs</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#"><Link style={padding} to="/" >Blogs</Link></Nav.Link>
                        <Nav.Link href="#"><Link style={padding} to="/users">users</Link></Nav.Link>
                        <Nav.Link href="#">
                            {user ? <span style={padding}> logged in <Button variant='secondary' id='logout-button' onClick={logout()}>logout</Button></span> : <Link style={padding} to="/login">users</Link>}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users/:id" element={<User user={userM} />} />
            <Route path='/blogs/:id' element={<BlogPage blog={blog} />} />
        </Routes>
    </>
    )
}
export default Menu