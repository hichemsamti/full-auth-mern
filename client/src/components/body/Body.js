
import {Switch ,Route} from "react-router-dom"
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationMail from "./auth/ActivationMail"
import {useSelector} from "react-redux"
import NotFound from "../utils/notFound/NotFound"
import ForgotPassword from "../body/auth/ForgotPassword"


export default function Body() {

    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
       <section>
           
           <Switch>
               <Route path="/login" component={isLogged ? NotFound : Login} exact />
               <Route path="/register" component={isLogged ? NotFound : Register} exact />
               <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPassword} exact />
               <Route path="/user/activate/:activation_token" component={ActivationMail} exact />


           </Switch>


       </section>
    )
}
