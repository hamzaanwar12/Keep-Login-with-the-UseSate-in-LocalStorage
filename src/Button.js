import "./Button.css"
const Button = (props)=>
{

    return (
        <button disabled = {props.status} className = {props.status?"active":"inactive"} 
        onClick = {props.clikedButton} >  {props.buttonType} </button>
    )
}
export default Button

