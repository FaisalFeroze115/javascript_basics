import {useState} from 'react'
import { registerWithEmailAndPassword } from '../firebase'
import {NavLink, useNavigate} from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const user = await registerWithEmailAndPassword(email, password)
            navigate('/login')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <h1 className='text-3xl my-4'>Register</h1>

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
                    onClick={handleRegister}
                >
                    Register
                </button>
            </form>

            <p>Already Have an Account ? {'  '}
                <NavLink to='/login'>Login</NavLink>
            </p>

        </div>
    )
}

export default Register