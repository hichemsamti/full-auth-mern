import React, {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {showErrMsg, showSuccessMsg} from "../../utils/notifications/Notification"
import axios from 'axios'
export default function ActivationMail() {

    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    return (
        <div className="active_page">
            
        </div>
    )
}
