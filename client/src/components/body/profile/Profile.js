import React , {useState, useEffect} from 'react'
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {isLength, isMatch} from "../../utils/validation/Validation"
import {showSuccessMsg,showErrMsg} from "../../utils/notifications/Notification"

const initialState ={

    name:"",
    password:"",
    cf_password:"",
    err:'',
    success:"",
}

function Profile() {

    const auth =useSelector(state =>state.auth)
    const token= useSelector(state =>state.token)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const [avatar, setAvatar] = useState(false)
    const [loading,setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    return (
        <div className="profile_page">
            <div className="col-left">
                  <h2>{isAdmin ? "Admin Profile" : "UserProfile"}  </h2>

                  <div className="avatar"></div>
            
            </div>
            <div className="col-right"></div>
        </div>
    )
}

export default Profile
