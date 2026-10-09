import { sendPasswordReset } from "../firebase"
import {useState} from 'react'
import {NavLink} from 'react-router-dom'



const Reset = () => {
    const [email, setEmail] = useState('')

    return (
        <div>
            <h1 className='text-3xl my-4'>Reset Password</h1>

            <div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />

                <button onClick={() => sendPasswordReset(email)} className='bg-blue-500 my-4 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >Send Reset Email</button>
            </div>

            <p>No Account ? {'  '}
                <NavLink className="underline" to='/register'>Register</NavLink>
            </p>
        </div>
    )
}

export default Reset