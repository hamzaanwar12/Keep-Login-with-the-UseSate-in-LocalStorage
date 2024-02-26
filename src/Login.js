import "./Login.css"
// import Button from "./Button"
import "./Button.css"
import { useState ,useEffect,useReducer} from "react"


const EmailReducer = (state,action)=>
{
    if(action.type === "input")
        return{
            value : action.value,
            isValid : action.value.includes("@")
        }
    /*
        else if(action.type === "blur")
        return {
            value: state.value,
            isValid: state.value.includes("@")
        }
    */
    return{
        value:"",
        isValid : false
    }
}

const PasswordReducer = (state,action)=>
{
    if(action.type === "input")
        return{
            value : action.value,
            isValid : action.value.length>6
        }
    /*
    else if(action.type === "blur")
        return {
            value: state.value,
            isValid: state.value.length>6
        }
        */
    return{
        value:"",
        isValid : false
    }
}



const Login = (props)=>
{
    // const [email,setEmail] = useState("")
    // const [isEmailValid,setEmailValid] = useState(false)
    // const [password,setPassword] = useState("")
    // const [isPasswordValid,setPasswordValid] = useState(false)
    const [email,dispatch] = useReducer(EmailReducer,{value:"",isValid:false});
    const [passWord,dispatchPass] = useReducer(PasswordReducer,{value:"",isValid:false});

    useEffect(()=>
    {
       let timeEffect = setTimeout(()=>
       {
            if(email.isValid && passWord.isValid)
                localStorage.setItem("logIn","1")

            else if(localStorage.getItem("logIn")=="1")
                localStorage.setItem("logIn","0")
            
        },500) 
            
        return (()=>clearTimeout(timeEffect))
    }
    ,[email.isValid,passWord.isValid])

    const emailChange = (event)=>dispatch({type:"input",value:event.target.value})
    const passwordChange = (event)=>dispatchPass({type:"input",value:event.target.value})
    
    
    const submitHandler = (event)=>
    {
        event.preventDefault()
        props.changeLogin()
    }

    return(
        <form>
            <h3 >Email</h3>-
            <input type="email" value = {email.value} onChange = {emailChange} className={email.isValid?"valid":"invalid"}/>
            <h3>Password</h3>
            <input type="password" value = {passWord.value} onChange = {passwordChange} className={passWord.isValid?"valid":"invalid"}/>
            {/* <Button type = "submit" clikedButton = {submitHandler} status = {isEmailValid&&isPasswordValid} buttonType = "LogIn" ></Button> */}
            <button disabled = {!(email.isValid&&passWord.isValid)} className={email.isValid&&passWord.isValid?"active":"inactive"}onClick = {submitHandler}>LogIn</button>          
        </form>
    )
}

export default Login