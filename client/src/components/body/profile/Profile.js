import React , {useState, useEffect} from 'react'
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {isLength, isMatch} from "../../utils/validation/Validation"
import {showSuccessMsg,showErrMsg} from "../../utils/notifications/Notification"
import "./profile.css"



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


    const {name,email,password,cf_password,err,success} = data


    const handleChange = e =>{

        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success:''})


    }



    const updateInfor = () => {

        try{

           axios.patch('/user/update',{
               name: name ? name : user.name,
               avatar: avatar ? avatar : user.avatar,

           },{
               headers: {Authorization : token}
           })

           setData({...data, err:"", success:'Updated successfully'})
       
       
        } catch(err){

            setData({...data, err: err.response.data.msg, success:""})
        }


    }




    return (
        <div className="profile_page">
            <div className="col-left">
                  <h2>{isAdmin ? "Admin Profile" : "UserProfile"}  </h2>

                  <div className="avatar">




                       <img src= {avatar ? avatar : user.avatar} alt="" />

                       <span>
                       <i className="fas fa-camera"></i>
                       <p>Change</p>
                       <input type="file" name="file" id="file_up"/>
                       </span>

                  </div>
            

                  <div className="form_group">
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" id=""
                     placeholder="Enter name" value={name} defaultValue={user.name} onChange={handleChange}/>

                  </div>


                  <div className="form_group">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id=""
                     placeholder="Enter email" value={email} defaultValue={user.email} disabled/>

                  </div>


                  <div className="form_group">
                     <label htmlFor="password">new Password</label>
                     <input type="password" name="password" id=""
                     placeholder="Enter Password" value={password} onChange={handleChange} />

                </div>

                  <div className="form_group">
                     <label htmlFor="cf_password">Confirm Password</label>
                     <input type="password" name="cf_password" id=""
                     placeholder="Confirm Password" value={cf_password} onChange={handleChange} />

                  </div>

                  <button disabled={loading}>Update</button>
            </div>
            <div className="col-right">

                <h2>{isAdmin ? "Users" : "MyOrders"} </h2>

                    <div  style={{overFlowX:"auto"}}>
                        <table className="customers">
                            <thead>
                               <tr>
                                   <th>ID</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Admin</th>
                                   <th>Action</th>

                               </tr>



                            </thead>

                            <tbody>

                                    <td>ID</td>
                                 
                                   <td>Name</td>
                                   <td>Email</td>
                                   <td>Admin</td>
                                   <td>Action</td>


                            </tbody>

                        </table>


                    </div>


            </div>
        </div>
    )
}

export default Profile
