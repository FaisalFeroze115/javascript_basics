import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../firebase'

import {Navigate, Outlet} from 'react-router-dom'




const PrivateRoutes = () => {
    const [user, loading, error] = useAuthState(auth)

    if(loading) return <p>User Info Loading.........</p>

    return user ? <Outlet /> : <Navigate to="/login" />


}

export default PrivateRoutes