import {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { loginWithEmailAndPassword, signInWithGoogle } from '../firebase'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const user = await loginWithEmailAndPassword(email, password)
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }

    const handleGoogleLogin = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithGoogle()
            console.log(user)
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }   


    return (
        <div>
            <h1>Login</h1>

            <div>
                <form>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    <button onClick={handleGoogleLogin} className='bg-green-500 mx-4 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >Login With Google</button>
                </form>

                <p>No Account ? {'  '}
                    <NavLink className="underline" to='/register'>Register</NavLink>
                </p>

                <p>Forgot Password ? {'  '}
                    <NavLink className="underline" to='/reset'>Reset Your Password</NavLink>
                </p>


            </div>

        </div>
    )
}

export default Login