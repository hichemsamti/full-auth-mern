
import React , {useState}  from 'react'
import {Link} from "react-router-dom"
import "./auth.css"
import axios from "axios"


const initialState = {
    email:"",
    password:"",
    err:"",
    success:"",


}



export default function Login() {

    const[user, setUser] = useState(initialState)
    const {email,password,err,success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user , [name]:value, err:"", success:""})
    }


    const handleSubmit = async e => {
        e.preventDefault()

        try{


        }catch(err){

            err.response.data.msg && setUser({...user , err:err.response.data.msg, success:""})
        }
    }

    return (
        <div className="login_page">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email" id="email" value={email} name="email"
                    onChange={handleChangeInput}
                    />
                </div>
                
                <div>
                   <label htmlFor="password">Password</label>
                   <input type="password" placeholder="Enter password" id="password" value={password} name="password"
                   onChange={handleChangeInput}
                   />
                </div>
               
                <div className="row">

                    <button type="submit">Login</button>
                    <Link to="/forgot_password">Forgot your password</Link>
                   
                </div>
            </form>
        </div>
    )
}
