import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'

const Home = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login')
            console.log('User signed out successfully')
        }).catch((error) => {
            console.error(error)
        })

    }

    if(loading) return <p>User Info Loading.........</p>


    return (
        <div>
            <h1>Welcom {user?.email}</h1>

            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Home