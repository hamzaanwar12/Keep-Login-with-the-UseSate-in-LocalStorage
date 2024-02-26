import "./Login.css"
// import Button from "./Button"
import "./Button.css"
import { useState ,useEffect,useReducer} from "react"



const Login = (props)=>
{
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isPasswordValid,setPasswordValid] = useState(false)
    const [isEmailValid,setEmailValid] = useState(false)

    useEffect(()=>
    {
       let timeEffect = setTimeout(()=>
       {
            if(isEmailValid&&isPasswordValid)
            {
                localStorage.setItem("logIn","1")
                // props.changeLogin()
            }
            
            else if(localStorage.getItem("logIn")=="1")
            {
                localStorage.setItem("logIn","0")
            }
            console.log("running xcbfg")
        },500) 
            
        return (()=>clearTimeout(timeEffect))
    }
    ,[isEmailValid,isPasswordValid])

    const emailChange = (event)=>
    {
        setEmail(event.target.value)

        // if(email.includes("@"))
        if(event.target.value.includes("@"))
            setEmailValid(true)
        else if(isEmailValid)
            setEmailValid(false)
    }    

    const passwordChange = (event)=>
    {
        setPassword(event.target.value)
        // if(password.length>6)
        if(event.target.value.length>=7)
            setPasswordValid(true)
        else if(isPasswordValid)
            setPasswordValid(false)
    }
    
    

    const submitHandler = (event)=>
    {
        event.preventDefault()
        props.changeLogin()
    }

    return(
        <form>
            <h3 >Email</h3>-
            <input type="email" value = {email} onChange = {emailChange} className={isEmailValid?"valid":"invalid"}/>
            <h3>Password</h3>
            <input type="password" value = {password} onChange = {passwordChange} className={isPasswordValid?"valid":"invalid"}/>
            {/* <Button type = "submit" clikedButton = {submitHandler} status = {isEmailValid&&isPasswordValid} buttonType = "LogIn" ></Button> */}
            <button className={isEmailValid&&isPasswordValid?"active":"inactive"}onClick = {props.changeLogin}>LogIn</button>          
        </form>
    )
}

export default Login