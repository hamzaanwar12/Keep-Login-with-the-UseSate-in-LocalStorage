// import Button from "./Button";
import "./navBar.css"
import "./Button.css"
const Navbar = (props) => 
{

    return (
        <nav>
            <h1>A Typical Page</h1>
            {props.isValid && <ul>
                <li>Home</li>
                <li>Users</li>
                <li>Admin</li>
                {/* <Button status = {true} buttonType = {"LogOut"}  clikedButton = {props.changelogout}></Button> */}
                <button className="active" onClick = {props.changelogout}>LogOut</button>
            </ul>
            }
        </nav>
    )
}

export default Navbar